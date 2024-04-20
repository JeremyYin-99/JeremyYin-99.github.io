import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/Home";
import RandPPage from "./pages/ResearchAndPublications";
import ContactPage from "./pages/Contact";
import { useLayoutEffect } from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ResearchAndPublications" element={<RandPPage />} />
          </Routes>
          <ContactPage />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
