import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.schema';

@Controller('reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Post()
  async createReservation(@Body() reservation): Promise<Reservation> {
    return this.reservationService.createReservation(reservation);
  }

  @Get()
  async getReservations(): Promise<Reservation[]> {
    return this.reservationService.getReservations();
  }

  @Get(':passportNo')
  async getReservationsForUser(
    @Param('passportNo') passportNo: string,
  ): Promise<Reservation[]> {
    return this.reservationService.getReservationsByPassportNo(passportNo);
  }

  @Put()
  async updateReservation(@Body() reservation): Promise<Reservation> {
    return this.reservationService.updateReservation(reservation);
  }

  @Delete(':reservationId')
  async removeReservation(
    @Param('reservationId') reservationId: string,
  ): Promise<Reservation> {
    return this.reservationService.removeReservation(
      reservationId as unknown as MongooseSchema.Types.ObjectId,
    );
  }
}
