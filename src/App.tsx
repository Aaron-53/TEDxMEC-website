import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TicketFormPage from "./pages/TicketFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tickets" element={<TicketFormPage />} />
    </Routes>
  );
}

export default App;
