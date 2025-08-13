import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema()
class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  zip_code: string;
}

@Schema()
class Contact {
  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;
}

@Schema({ timestamps: true })
export class Hospital {
  @Prop({ required: true })
  name: string;

  @Prop()
  logo: string;

  @Prop({ type: Address })
  address: Address;

  @Prop({ type: Contact })
  contact: Contact;

  @Prop([String])
  specialties: string[];
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
