import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./pages/AssignmentList";
import Attempt from "./pages/Attempt";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        <Route path="/attempt/:id" element={<Attempt />} />
      </Routes>
    </BrowserRouter>
  );
}
