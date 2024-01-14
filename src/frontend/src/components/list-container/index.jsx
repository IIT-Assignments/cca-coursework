import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AirlineImage from "../../assets/airline.webp"
import BasicModal from "../modal";

function ListContainer({ list }) {

  const [open, setOpen] = React.useState(false);
  const [flightNumber, setFlightNumber] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid container spacing={2}>
        {list && list.length &&
          list.map((item) => (
            <Grid key={item._id} item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={AirlineImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Flight Number: {item.flightNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Airline : {item.airline}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Departure Airport : {item.departureAirport}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Departure Time : {item.departureTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Arrival Airport : {item.arrivalAirport}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Arrival Time : {item.arrivalTime}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>{
                    setFlightNumber(item.flightNumber);
                    handleOpen()
                    }}>Reserve</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <BasicModal open={open} handleClose={handleClose} flightNumber={flightNumber}/>
    </div>
  );
}

export default ListContainer;
