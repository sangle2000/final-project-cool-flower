import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScrollPage = () => {
      if (window.scrollY > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScrollPage);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollPage);
    };
  }, []);

  const handleNavigatePage = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <div
        className="navbar-container"
        style={
          isScroll
            ? {
                backgroundColor: "#fff",
                transition: "all 0.2s linear",
              }
            : {}
        }
      >
        <div className="brand-container">
          <img
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
            alt="Brand Logo"
          />

          <span>Cool Flower</span>
        </div>
        <div className="menu-container">
          <span
            className={currentPage == "/" ? "active" : ""}
            onClick={() => handleNavigatePage("")}
          >
            Home
          </span>
          <span
            className={`store-dropdown ${
              currentPage == "/store" ? "active" : ""
            }`}
            onClick={() => handleNavigatePage("store")}
          >
            Store
          </span>
          <span
            className={currentPage == "/about" ? "active" : ""}
            onClick={() => handleNavigatePage("about")}
          >
            About Us
          </span>
          <span
            className={currentPage == "/contact" ? "active" : ""}
            onClick={() => handleNavigatePage("contact")}
          >
            Contact Us
          </span>
          <span
            className={currentPage == "/account" ? "active" : ""}
            onClick={() => handleNavigatePage("account")}
          >
            My Account
          </span>
        </div>

        <div className="user-container">
          <span className="user-pricing">$0.00</span>
          <span className="user-cart">
            <i className="bi bi-bag-fill user-cart-logo"></i>
            <span className="user-cart-quantity">0</span>
          </span>
          <span>
            <i className="bi bi-person-circle"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
