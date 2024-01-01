import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TicketImage from "../../assets/ticket.jpeg";

function ListContainerBookings({ list }) {
  return (
    <div>
      <Grid container spacing={2}>
        {list &&
          list.length &&
          list.map((item) => (
            <Grid key={item._id} item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={TicketImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Booking Id : {item.id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Reservation Id : {item.reservationId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Flight Id : {item.flightId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Payment Status : {item.paymentStatus}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ListContainerBookings;
