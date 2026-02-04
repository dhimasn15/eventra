import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'participant' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Email diperlukan'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email tidak valid'],
    },
    password: {
      type: String,
      required: [true, 'Password diperlukan'],
      minlength: 6,
      select: false,
    },
    name: {
      type: String,
      required: [true, 'Nama diperlukan'],
    },
    role: {
      type: String,
      enum: ['participant', 'admin'],
      default: 'participant',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
