package com.example.booking.booking;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepository
        extends MongoRepository<Booking,Long> {
}
