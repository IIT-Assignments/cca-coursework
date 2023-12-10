import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { FlightSchema } from './schemas/flight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Flight', schema: FlightSchema }]),
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
