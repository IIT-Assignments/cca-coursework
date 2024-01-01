import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Box from "@mui/material/Box";
import { TextField, Button, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import { createReservation } from "../../api/reservations";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, flightNumber }) {
  const navigate = useNavigate()
  // Get QueryClient from the context
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    flightId: "",
    passportNo: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const mutation = useMutation(createReservation, {
    onSuccess: (data) => {
      // Refetch the flights data after successful mutation
      queryClient.invalidateQueries("reservations");
      // You can add a notification here, like showing a success message
      console.log("Flight created:", data);

      setFormData({
        flightId: "",
        passportNo: "",
        email: "",
        phoneNumber: "",
      });

      handleClose();

      navigate('/reservations')
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      ...formData,
      flightId: flightNumber
    }
    mutation.mutate(reservationData);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form style={{ marginBottom: "15px" }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="flightId"
                label="flightId"
                value={flightNumber}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="passportNo"
                label="passportNo"
                value={formData.passportNo}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                label="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
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
      </Box>
    </Modal>
  );
}
