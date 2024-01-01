import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Flights from "./pages/flights";
import FlightForm from "./pages/create-flight";
import {
  Route,
  Routes
} from "react-router-dom";
import Reservations from "./pages/reservations";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div style={{ padding: "5%" }}>
        <Routes>
          <Route path="/" element={<><FlightForm /><Flights /></>}>
          </Route>
          <Route path="/reservations" element={<Reservations/>}>
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
