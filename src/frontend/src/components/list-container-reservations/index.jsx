import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Reservationimage from "../../assets/reservation.jpeg";
import BasicModalBooking from "../booking-modal";

function ListContainerReservations({ list }) {
  const [open, setOpen] = React.useState(false);
  const [flightId, setFlightId] = React.useState(null);
  const [reservationId, setReservationId] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  image={Reservationimage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Flight Number : {item.flightId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Passport No : {item.passportNo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email : {item.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone Number : {item.phoneNumber}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setFlightId(item.flightId);
                      setReservationId(item._id);
                      handleOpen();
                    }}
                  >
                    Book
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <BasicModalBooking
        open={open}
        handleClose={handleClose}
        flightId={flightId}
        reservationId={reservationId}
      />
    </div>
  );
}

export default ListContainerReservations;
