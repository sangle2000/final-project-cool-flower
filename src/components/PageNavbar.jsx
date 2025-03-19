import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch, useSelector} from "react-redux";
import getUserProfile from "../app/account/getUserProfile.js";
import {loginAccount} from "../app/account/accountSlice.js";
import {useDeviceChecked} from "../store/DeviceCheckedProvider.jsx";

function PageNavbar({ setIsShowCart }) {
    const [currentPage, setCurrentPage] = useState("");

    const { isLogin, wallet, name, item_in_cart } = useSelector((state) => state.account);

    const device = useDeviceChecked()

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            dispatch(loginAccount())
            dispatch(getUserProfile({ token }))
        }
    }, [isLogin, wallet, name])

    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ zIndex: 100, position: currentPage.startsWith("/account") ? "relative" : "fixed" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/logo.jfif"
                            alt="Brand Logo"
                        />

                        <span>Petals & You</span>
                    </Navbar.Brand>

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={
                            device !== "PC" ?
                                {
                                    position: "absolute",
                                    width: "100vw",
                                    top: "100%",
                                    backgroundColor: "transparent",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    padding: "0 2rem",
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
                            <Nav.Link href="/account" className={currentPage.startsWith("/account") ? "active" : ""}>My
                                Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="user-container">
                        <span
                            className="user-pricing"
                        >
                            {wallet} points
                        </span>
                        <span
                            className="user-cart"
                            onClick={() => setIsShowCart(true)}
                        >
                            <i className="bi bi-bag-fill user-cart-logo"></i>
                            <span className="user-cart-quantity">{isLogin ? item_in_cart : 0}</span>
                        </span>
                        {
                            isLogin ?
                                <span
                                    style={device === "Small Mobile" ? {maxWidth: "75px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontSize: "0.8rem"} : {}}
                                >
                                    Hello, { name}
                                </span> : ""
                        }
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{width: "75px !important"}}/>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default PageNavbar;
