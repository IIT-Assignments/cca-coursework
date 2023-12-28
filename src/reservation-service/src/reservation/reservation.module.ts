import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ReservationSchema } from './reservation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Reservation', schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
