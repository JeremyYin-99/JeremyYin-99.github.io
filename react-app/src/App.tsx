import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/Home";
import RandPPage from "./pages/ResearchAndPublications";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ResearchAndPublications" element={<RandPPage />} />
        </Routes>
        <ContactPage />
      </HashRouter>
    </>
  );
}

export default App;
