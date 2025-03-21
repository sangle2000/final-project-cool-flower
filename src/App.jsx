import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/index.scss";
import PageNavbar from "./components/PageNavbar.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./sections/Footer";
import Store from "./pages/Store.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Account from "./pages/Account.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import {useEffect, useState} from "react";
import CartView from "./components/CartView.jsx";

function App() {
    const [isShowCart, setIsShowCart] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsShowCart(false)
    }, [location]);

    return (
        <>
            <PageNavbar setIsShowCart={setIsShowCart} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/account/*" element={<Account/>}/>
                <Route path="/cart" element={<CartView/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
            <Footer/>
            <ToastContainer pauseOnFocusLoss={false} draggable/>
            <CartDrawer isShowCart={isShowCart} setIsShowCart={setIsShowCart}/>
        </>
    );
}

export default App;
