import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { MongooseModule } from '@nestjs/mongoose';

const DB_URI = `mongodb+srv://senura:senura8864@devconnector.y7pfp.mongodb.net/iit?retryWrites=true&w=majority`;

@Module({
  imports: [ReservationModule, MongooseModule.forRoot(DB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
