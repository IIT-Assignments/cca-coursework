export const getReservations= () => {
    return fetch(`${process.env.REACT_APP_BFF_SERVICE}/reservations`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };
  
  export const createReservation = async (formData) => {
    // Replace this with your actual API endpoint for creating a reservations
    const response = await fetch(`${process.env.REACT_APP_BFF_SERVICE}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Error creating reservation");
    }
  
    return response.json();
  };
  