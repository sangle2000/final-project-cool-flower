import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {SIGNUP_MUTATION} from "../../utils/graphql/mutations.js";
import Loading from "../../sections/Loading.jsx";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorSignUp, setErrorSignUp] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION)

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            if (password === confirmPassword) {
                await signUp({
                    variables
                        : { email, password }
                })
            } else {
                setErrorSignUp("Confirm passwords don't match");
            }
        } catch (err) {
            console.log("Mutation Error: ", err)
        }
    }

    useEffect(() => {
        switch (data?.signUp.status) {
            case "success":
                localStorage.setItem("authToken", data.signUp.token);
                navigate("/account/profile")
                break;

            case "error":
                setErrorSignUp(data.signUp.errors[0])
                break;
        }
    }, [data])

    return (
        <>
            <div className="form-container">
                <h1>
                    Sign up
                </h1>
                <form className="form" onSubmit={(e) => handleSignUp(e)}>
                    {
                        errorSignUp ?
                            <span style={{color: "red", fontWeight: "600"}}>{errorSignUp}</span> : ""
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
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            onFocus={() => setErrorSignUp("")}
                        />
                    </div>

                    <div className="flex-column">
                        <label>Password </label>
                    </div>
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
                            onFocus={() => setErrorSignUp("")}
                        />
                        <div className="show-password" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
                            }
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Confirm Password </label>
                    </div>
                    <div className="inputForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                        </svg>
                        <input
                            placeholder="Confirm your Password"
                            className="input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={showConfirmPassword ? "text" : "password"}
                            onFocus={() => setErrorSignUp("")}
                        />
                        <div className="show-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {
                                showConfirmPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
                            }
                        </div>
                    </div>
                    <button className="button-submit">Sign Up</button>

                    <p className="p">
                        {`Have an account?`}
                        <Link to="/account/login">
                            <span className="span">Login</span>
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

export default SignUp;