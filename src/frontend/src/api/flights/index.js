export const getFlights = () => {
  return fetch(`${process.env.REACT_APP_BFF_SERVICE}/flights`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

export const createFlight = async (formData) => {
  // Replace this with your actual API endpoint for creating a flight
  const response = await fetch(`${process.env.REACT_APP_BFF_SERVICE}/flights`, {
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
