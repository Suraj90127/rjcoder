import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contect from "./pages/Contect";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <Router>
      {/* Navbar should be placed outside the Routes */}
      <Navbar />

      {/* Routes should only contain Route or React.Fragment components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
