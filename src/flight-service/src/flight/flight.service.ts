import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Flight } from './schemas/flight.schema';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(Flight.name)
    private flightModal: mongoose.Model<Flight>,
  ) {}

  async findAll(): Promise<Flight[]> {
    const flights = await this.flightModal.find();
    return flights;
  }

  async create(flight: Flight): Promise<Flight> {
    const newFlight = await this.flightModal.create(flight);
    return newFlight;
  }
}
