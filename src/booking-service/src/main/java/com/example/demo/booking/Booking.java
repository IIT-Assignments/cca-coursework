package com.example.demo.booking;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Booking {
    @Id
    private String id;
    @Indexed(unique = true)
    private String reservationId;
    private String flightId;
    private String airline;
    private String status;
    private String paymentStatus;

    public Booking() {
    }

    public Booking(String id,
                   String reservationId,
                   String flightId,
                   String airline,
                   String status,
                   String paymentStatus) {
        this.id = id;
        this.reservationId = reservationId;
        this.flightId = flightId;
        this.airline = airline;
        this.status = status;
        this.paymentStatus = paymentStatus;
    }

    public Booking(String reservationId,
                   String flightId,
                   String airline,
                   String status,
                   String paymentStatus) {
        this.reservationId = reservationId;
        this.flightId = flightId;
        this.airline = airline;
        this.status = status;
        this.paymentStatus = paymentStatus;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReservationId() {
        return reservationId;
    }

    public void setReservationId(String reservationId) {
        this.reservationId = reservationId;
    }

    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", reservationId=" + reservationId +
                ", flightId=" + flightId +
                ", airline='" + airline + '\'' +
                ", status='" + status + '\'' +
                ", paymentStatus='" + paymentStatus + '\'' +
                '}';
    }
}
