import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Reservation {
  @Prop()
  _id?: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  passportNo: string;

  @Prop({ required: true })
  flightId: string;

  @Prop()
  email?: string;

  @Prop()
  phoneNumber?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
