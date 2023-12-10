import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './schemas/flight.schema';

@Controller('flights')
export class FlightController {
  constructor(private flightService: FlightService) {}

  @Get()
  async getFlights(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Post()
  async createFlight(
    @Body()
    flight,
  ): Promise<Flight> {
    return this.flightService.create(flight);
  }
}
