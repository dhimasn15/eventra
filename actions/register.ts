'use server';

import { z } from 'zod';
import connectDB from '@/lib/db';
import User from '@/models/User';

const RegisterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['participant', 'team_leader']).default('participant'),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    role?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function registerUser(_prevState: State | undefined, formData: FormData): Promise<State> {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register.',
      success: false,
    };
  }

  const { name, email, phone, password, role } = validatedFields.data;

  try {
    await connectDB();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return {
            message: 'Email already exists.',
            success: false,
        }
    }

    await User.create({
      name,
      email,
      phone,
      password, // Pass plain password, let User model middleware hash it
      role,
    });
    
    // Convert to plain object to avoid serialization issues if returning user data in future
    return { 
        success: true, 
        message: 'Registration successful! Please login.' 
    };

  } catch (error) {
    console.error('Registration error:', error);
    return {
      message: 'Database Error: Failed to Register.',
      success: false,
    };
  }
}
