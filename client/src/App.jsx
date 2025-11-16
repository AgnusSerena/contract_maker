import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateContract from "./pages/CreateContract";
import ViewContract from "./pages/ViewContract";
import ConsultLawyer from "./pages/ConsultLawyer";
import EditContract from "./pages/EditContract";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateContract />} />
        <Route path="/view" element={<ViewContract />} />
        <Route path="/consult" element={<ConsultLawyer />} />
        <Route path="/edit-contract" element={<EditContract />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

