const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const port = 3005;
app.use(express.json());

// const flightService = "http://flight-service:80";
// const bookingService = "http://booking-service:80";
// const reservationService = "http://reservation-service:80";

const flightService = "http://localhost:3001";
const bookingService = "http://localhost:8080";
const reservationService = "http://localhost:8088";

app.get("/", (req, res) => {
  res.send("Backend for frontend");
});

//Routes for Flights Services
app.get("/flights", (req, res) => {
  axios
    .get(`${flightService}/flights`)
    .then((response) => res.json(response.data));
});

app.post("/flights", (req, res) => {
  axios
    .post(`${flightService}/flights`, req.body)
    .then((response) => res.json(response.data));
});

app.delete("/flights/:flightid", (req, res) => {
  axios
    .delete(`${flightService}/flights/${req.params.flightid}`, req.body)
    .then((response) => res.json(response.data));
});

app.get("/flights/:flightid", (req, res) => {
  axios
    .get(`${flightService}/flights/${req.params.flightid}`, req.body)
    .then((response) => res.json(response.data));
});

//Routes for Booking Services
app.get("/bookings", (req, res) => {
  axios
    .get(`${bookingService}/api/v1/booking`)
    .then((response) => res.json(response.data));
});

app.post("/bookings", (req, res) => {
  axios
    .post(`${bookingService}/api/v1/booking`, req.body)
    .then((response) => res.json(response.data));
});

app.delete("/bookings/:bookingId", (req, res) => {
  axios
    .delete(`${bookingService}/api/v1/booking/${req.params.bookingId}`, req.body)
    .then((response) => res.json(response.data));
});

app.get("/bookings/:bookingId", (req, res) => {
  axios
    .get(`${bookingService}/api/v1/booking/${req.params.bookingId}`)
    .then((response) => res.json(response.data));
});

//Routes for Reservation Services
app.get("/reservations", (req, res) => {
  axios
    .get(`${reservationService}/reservation`)
    .then((response) => res.json(response.data)).catch((error)=>{console.log(error)});
});

app.post("/reservations", (req, res) => {
  axios
    .post(`${reservationService}/reservation`, req.body)
    .then((response) => res.json(response.data)).catch((error)=>{console.log(error)});
});

app.delete("/reservations/:reservationId", (req, res) => {
  axios
    .delete(`${reservationService}/reservation/${req.params.reservationId}`, req.body)
    .then((response) => res.json(response.data));
});

app.get("/reservations/:reservationId", (req, res) => {
  axios
    .get(`${reservationService}/reservation/${req.params.reservationId}`)
    .then((response) => res.json(response.data));
});

app.listen(port, () => {
  console.log(`main app listening on port ${port}`);
});
