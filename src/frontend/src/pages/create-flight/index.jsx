import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { createFlight } from "../../api/flights";

const FlightForm = () => {
    // Get QueryClient from the context
   const queryClient = useQueryClient()
  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    departureAirport: "",
    departureTime: "",
    arrivalAirport: "",
    arrivalTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const mutation = useMutation(createFlight, {
    onSuccess: (data) => {
      // Refetch the flights data after successful mutation
      queryClient.invalidateQueries('flights');
      // You can add a notification here, like showing a success message
      console.log('Flight created:', data);

      setFormData({
        airline: "",
        flightNumber: "",
        departureAirport: "",
        departureTime: "",
        arrivalAirport: "",
        arrivalTime: "",
      });
    },
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form style={{marginBottom: "15px"}} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="airline"
            label="Airline"
            value={formData.airline}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="flightNumber"
            label="Flight Number"
            value={formData.flightNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="departureAirport"
            label="Departure Airport"
            value={formData.departureAirport}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="departureTime"
            label="Departure Time"
            type="datetime-local"
            value={formData.departureTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="arrivalAirport"
            label="Arrival Airport"
            value={formData.arrivalAirport}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="arrivalTime"
            label="Arrival Time"
            type="datetime-local"
            value={formData.arrivalTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Submitting..." : "Submit"}
          </Button>
          {mutation.isError && <div>Error: {mutation.error.message}</div>}
        </Grid>
      </Grid>
    </form>
  );
};

export default FlightForm;
