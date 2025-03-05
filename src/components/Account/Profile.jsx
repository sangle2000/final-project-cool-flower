import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {UPDATE_PROFILE_MUTATION} from "../../utils/graphql/mutations.js";
import {loginAccount} from "../../app/account/accountSlice.js";
import {useDispatch} from "react-redux";
import Loading from "../../sections/Loading.jsx";

function Profile() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE_MUTATION)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            await updateProfile({variables: {name, phone, address}})
        } catch (err) {
            console.log("Mutation Error: ", err)
        }
    }

    useEffect(() => {
        switch (data?.updateProfile.status) {
            case "success":
                localStorage.setItem("authToken", data.updateProfile.token);
                dispatch(loginAccount())
                navigate("/")
                break;
        }
    }, [data])

    return (
        <>
            <div className="form-container">
                <h1>Update your profile</h1>
                <form className="form" onSubmit={(e) => handleSignUp(e)}>
                    <div className="flex-column">
                        <label>Your name </label></div>
                    <div className="inputForm">
                        <i className="bi bi-person-fill"></i>
                        <input
                            placeholder="Enter your name"
                            className="input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex-column">
                        <label>Phone Number</label>
                    </div>
                    <div className="inputForm">
                        <i className="bi bi-telephone-fill"></i>
                        <input
                            placeholder="Enter your phone number"
                            className="input"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="flex-column">
                        <label>Address </label>
                    </div>
                    <div className="inputForm">
                        <i className="bi bi-geo-fill"></i>
                        <input
                            placeholder="Enter your address"
                            className="input"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button className="button-submit">Update</button>
                </form>

                {
                    loading ? <Loading /> : ""
                }
            </div>
        </>
    )
}

export default Profile;