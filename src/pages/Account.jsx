import SignUp from "../components/Account/SignUp.jsx";
import Login from "../components/Account/Login.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import "../css/login_form.css"

function Account() {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/account/login/")
    }, [])

    return (
        <>
            <Routes>
                <Route path="login/" element={<Login />} />
                <Route path="sign-up/" element={<SignUp />} />
            </Routes>
        </>
    )
}

export default Account;