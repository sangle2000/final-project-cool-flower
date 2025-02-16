import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/index.scss";
import HomeNavbar from "./components/HomeNavbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} draggable />
    </>
  );
}

export default App;
