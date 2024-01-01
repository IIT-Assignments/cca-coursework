export const getBookings = () => {
    return fetch(`${process.env.REACT_APP_BFF_SERVICE}/bookings`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };
  
  export const createBooking = async (formData) => {
    // Replace this with your actual API endpoint for creating a booking
    const response = await fetch(`${process.env.REACT_APP_BFF_SERVICE}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Error creating flight");
    }
  
    return response.json();
  };
  