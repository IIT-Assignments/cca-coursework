import React from "react";
import { useMutation, useQueryClient } from "react-query";
import Box from "@mui/material/Box";
import { TextField, Button, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import { createBooking } from "../../api/bookings";

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

export default function BasicModalBooking({ open, handleClose, flightId, reservationId}) {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const mutation = useMutation(createBooking, {
    onSuccess: (data) => {
      // Refetch the flights data after successful mutation
      queryClient.invalidateQueries("bookings");
      // You can add a notification here, like showing a success message
      console.log("Booking created:", data);

      handleClose();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      flightId,
      reservationId,
      paymentStatus: "success",
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
                name="reservationId"
                label="reservationId"
                value={reservationId}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="flightId"
                label="flightId"
                value={flightId}
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
                {mutation.isLoading ? "Pending..." : "Book"}
              </Button>
              {mutation.isError && <div>Error: {mutation.error.message}</div>}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
