import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Hospital } from '../../hospitals/schemas/hospital.schema';

export type DoctorDocument = Doctor & Document;

@Schema({ timestamps: true })
export class Doctor {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user_id: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true })
  hospital_id: Hospital;

  @Prop({ required: true })
  specialty: string;

  @Prop({ required: true })
  consultation_fee: number;

  @Prop({ type: Object })
  schedule: any; // Can be more specific later, e.g., { day: string, slots: string[] }[]

  @Prop({ default: false })
  verified: boolean;

  @Prop()
  license_url: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
