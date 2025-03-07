import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {LOGIN_MUTATION} from "../../utils/graphql/mutations.js";
import {useDispatch} from "react-redux";
import {loginAccount} from "../../app/account/accountSlice.js";
import Loading from "../../sections/Loading.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [errorLogin, setErrorLogin] = useState("");

    const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await login({
                variables: { email, password }
            })
        } catch (err) {
            console.log("Mutation Error: ", err)
        }
    }

    useEffect(() => {
        switch (data?.login.status) {
            case "success":
                localStorage.setItem("authToken", data.login.token);
                dispatch(loginAccount())
                navigate("/")
                break;

            case "error":
                setErrorLogin(data.login.errors[0])
                break;
        }
    }, [data, error])

    return (
        <>
            <div className="form-container">
                <h1>
                    Login
                </h1>
                <form className="form" onSubmit={(e) => handleLogin(e)}>
                    {
                        errorLogin ?
                        <span style={{color: "red", fontWeight: "600"}}>{errorLogin}</span> : ""
                    }

                    <div className="flex-column">
                        <label>Email </label></div>
                    <div className="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                            <g data-name="Layer 3" id="Layer_3">
                                <path
                                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                            </g>
                        </svg>
                        <input
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            type="email"
                            required
                        />
                    </div>

                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                        </svg>
                        <input
                            placeholder="Enter your Password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            required
                        />
                        <div className="show-password" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
                            }
                        </div>
                    </div>

                    <div className="flex-row">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                            <input type="checkbox"/>
                            <label>Remember me </label>
                        </div>
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Login</button>

                    <p className="p">
                        {`Don't have an account?`}
                        <Link to="/account/sign-up">
                            <span className="span">Sign Up</span>
                        </Link>
                    </p>
                </form>

                {
                    loading ? <Loading /> : ""
                }
            </div>
        </>
    )
}

export default Login;