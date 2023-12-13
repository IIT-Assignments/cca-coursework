package com.example.booking.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping(path="api/v1/booking")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getBookingByReservationId(@PathVariable String id) {
        Booking booking = bookingService.getBookingByReservationId(id);
        return ResponseEntity.ok(Objects.requireNonNullElse(booking, "No Data"));

    }

    @PostMapping
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
        try {
            Booking addedBooking = bookingService.addBooking(booking);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedBooking);
        } catch (Exception e) {
            // Log the exception
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable String id, @RequestBody Booking updatedBooking) {
        try {
            Booking updatedBookingResult = bookingService.updateBooking(id, updatedBooking);
            return ResponseEntity.ok(updatedBookingResult);
        } catch (Exception e) {
            // Log the exception
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBookingById(@PathVariable String id) {
        String result = bookingService.deleteBookingById(id);
        return result.equals("deleted")
                ? ResponseEntity.ok("Booking deleted successfully")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found or could not be deleted");
    }
}