import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomeNavbar() {
    const [currentPage, setCurrentPage] = useState("");
    const [device, setDevice] = useState("");

    // const

    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDevice("Mobile");
            } else if (width < 1024) {
                setDevice("Tablet");
            } else {
                setDevice("PC");
            }
        };

        checkDevice(); // Run on mount
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
                            alt="Brand Logo"
                        />

                        <span>Cool Flower</span>
                    </Navbar.Brand>

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={
                            device === "Mobile" ?
                                {
                                    position: "absolute",
                                    width: "100%",
                                    top: "100%",
                                    backgroundColor: "#E8E8E6",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    padding: "0 .5rem",
                                } :
                                {}
                        }
                    >
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={currentPage === "/" ? "active" : ""}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="/store" className={currentPage === "/store" ? "active" : ""}>
                                Store
                            </Nav.Link>
                            <Nav.Link href="/about" className={currentPage === "/about" ? "active" : ""}>About
                                Us</Nav.Link>
                            <Nav.Link href="/contact" className={currentPage === "/contact" ? "active" : ""}>Contact
                                Us</Nav.Link>
                            <Nav.Link href="/account" className={currentPage === "/account" ? "active" : ""}>My
                                Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="user-container">
                        <span className="user-pricing">$0.00</span>
                        <span className="user-cart">
                            <i className="bi bi-bag-fill user-cart-logo"></i>
                            <span className="user-cart-quantity">0</span>
                        </span>

                        {
                            device !== "Mobile" ?
                                <span>
                                    <i className="bi bi-person-circle"></i>
                                </span> : ""
                        }
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </div>
                </Container>
            </Navbar>

            {/*<div
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
            className={currentPage === "/" ? "active" : ""}
            onClick={() => handleNavigatePage("")}
          >
            Home
          </span>
          <span
            className={`store-dropdown ${
              currentPage === "/store" ? "active" : ""
            }`}
            onClick={() => handleNavigatePage("store")}
          >
            Store
          </span>
          <span
            className={currentPage === "/about" ? "active" : ""}
            onClick={() => handleNavigatePage("about")}
          >
            About Us
          </span>
          <span
            className={currentPage === "/contact" ? "active" : ""}
            onClick={() => handleNavigatePage("contact")}
          >
            Contact Us
          </span>
          <span
            className={currentPage === "/account" ? "active" : ""}
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
      </div>*/}
        </>
    );
}

export default HomeNavbar;
