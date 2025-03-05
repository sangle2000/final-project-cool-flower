import SignUp from "../components/Account/SignUp.jsx";
import Login from "../components/Account/Login.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import "../css/login_form.css"
import Profile from "../components/Account/Profile.jsx";
import {useSelector} from "react-redux";
import UserProfileDetail from "../components/Account/UserProfileDetail.jsx";

function Account() {

    const { isLogin, status } = useSelector((state) => state.account);

    const navigate = useNavigate();

    useEffect(() => {
        if (status === "success") {
            isLogin ? navigate("/account/userprofile") : navigate("/account/login/")
        } else if (status === "idle") {
            navigate("/account/login/")
        }
    }, [isLogin, status])

    return (
        <>
            <Routes>
                <Route path="login/" element={<Login />} />
                <Route path="sign-up/" element={<SignUp />} />
                <Route path="profile/" element={<Profile />} />
                <Route path="userprofile/" element={<UserProfileDetail />} />
            </Routes>

            {
                status === "loading" ?
                    <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[100vh] w-[100vw] flex justify-center align-items-center bg-[#000] opacity-[0.5]">
                        <div className="loader">
                            <span className="loader-text">loading</span>
                            <span className="load"></span>
                        </div>
                    </div> : ""
            }
        </>
    )
}

export default Account;