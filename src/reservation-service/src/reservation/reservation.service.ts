import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from './reservation.schema';
import mongoose, { Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModule: mongoose.Model<Reservation>,
  ) {}

  async createReservation(reservation: Reservation): Promise<Reservation> {
    return await this.reservationModule.create(reservation);
  }

  async getReservationsByPassportNo(
    passportNo: string,
  ): Promise<Reservation[]> {
    return await this.reservationModule.find({ passportNo: passportNo });
  }

  async updateReservation(reservation: Reservation): Promise<Reservation> {
    return await this.reservationModule.findOneAndUpdate(
      { _id: reservation._id },
      {
        flightId: reservation.flightId,
        passportNo: reservation.passportNo,
        email: reservation.email,
        phoneNumber: reservation.phoneNumber,
      },
      { upsert: true },
    );
  }

  async removeReservation(
    reservationId: MongooseSchema.Types.ObjectId,
  ): Promise<Reservation> {
    return await this.reservationModule.findOneAndDelete({
      _id: reservationId,
    });
  }
}
