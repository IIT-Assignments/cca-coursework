const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const port = 3005;
app.use(express.json());

const flightService = "http://flight-service:80";

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

app.listen(port, () => {
  console.log(`main app listening on port ${port}`);
});
