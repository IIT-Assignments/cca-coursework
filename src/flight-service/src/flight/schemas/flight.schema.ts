import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Flight {
  @Prop({ required: true })
  airline: string;

  @Prop({ required: true })
  flightNumber: string;

  @Prop({ required: true })
  departureAirport: string;

  @Prop({ required: true })
  departureTime: Date;

  @Prop({ required: true })
  arrivalAirport: string;

  @Prop({ required: true })
  arrivalTime: Date;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
