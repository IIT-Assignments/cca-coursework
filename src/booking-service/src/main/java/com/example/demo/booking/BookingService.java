package com.example.demo.booking;

import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@AllArgsConstructor
@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final MongoTemplate mongoTemplate;
    private static final Logger LOGGER = LoggerFactory.getLogger(BookingService.class);

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingByReservationId(String reservationId) {
        Query query = createQueryByReservationId(reservationId);

        Booking existingBooking = mongoTemplate.findOne(query, Booking.class);

        if (existingBooking == null) {
            LOGGER.info("No data found for reservationId: {}", reservationId);
        } else {
            LOGGER.info("ReservationId {} found", reservationId);
        }
        return existingBooking;
    }

    public Booking addBooking(Booking booking) {
        Query query = createQueryByReservationId(booking.getReservationId());

        Booking existingBooking = mongoTemplate.findOne(query, Booking.class);

        if (existingBooking == null) {
            LOGGER.info("Inserting Booking: {}", booking);
            bookingRepository.insert(booking);
            return booking; // Return the newly inserted booking
        } else {
            LOGGER.info("Booking {} already exists", booking);
            return existingBooking; // Return the existing booking in case of a conflict
        }
    }

    public Booking updateBooking(String reservationId, Booking updatedBooking) {
        Query query = createQueryByReservationId(reservationId);

        Booking existingBooking = mongoTemplate.findOne(query, Booking.class);

        if (existingBooking == null) {
            LOGGER.info("No data found for reservationId: {}", reservationId);
            return null;
        } else {
            LOGGER.info("ReservationId {} found. Updating...", reservationId);

            Update update = new Update()
                    .set("flightId", updatedBooking.getFlightId())
                    .set("airline", updatedBooking.getAirline())
                    .set("status", updatedBooking.getStatus())
                    .set("paymentStatus", updatedBooking.getPaymentStatus());

            mongoTemplate.updateFirst(query, update, Booking.class);
            return updatedBooking;
        }


    }


    public String deleteBookingById(String reservationId) {
        Query query = createQueryByReservationId(reservationId);

        Booking existingBooking = mongoTemplate.findOne(query, Booking.class);

        if (existingBooking == null) {
            LOGGER.info("No data found for reservationId: {}", reservationId);
            return null;
        } else {
            LOGGER.info("ReservationId {} found", reservationId);
            //bookingRepository.deleteById(reservationId);
            return "deleted";
        }
    }

    private Query createQueryByReservationId(String reservationId) {
        return new Query(Criteria.where("reservationId").is(reservationId));
    }
}