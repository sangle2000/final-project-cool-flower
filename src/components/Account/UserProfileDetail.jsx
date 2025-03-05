import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {rankLevel} from "../../utils/constant.js";
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import {logoutAccount} from "../../app/account/accountSlice.js";
import MaleAvatar from "../../assets/image/male_avt.png"
import {useMutation} from "@apollo/client";
import {UPDATE_PROFILE_MUTATION} from "../../utils/graphql/mutations.js";
import Loading from "../../sections/Loading.jsx";
import getUserProfile from "../../app/account/getUserProfile.js";

function UserProfileDetail() {

    const [showModal, setShowModal] = useState(false);

    const [isEditName, setIsEditName] = useState(false);
    const [isEditPhone, setIsEditPhone] = useState(false);
    const [isEditAddress, setIsEditAddress] = useState(false);

    const navigate = useNavigate();

    const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE_MUTATION)

    const { name, email, address, wallet, phone } = useSelector((state) => state.account);

    const [nameEdit, setNameEdit] = useState(name);
    const [phoneEdit, setPhoneEdit] = useState(phone);
    const [addressEdit, setAddressEdit] = useState(address);

    const dispatch = useDispatch();

    useEffect(() => {
        setNameEdit(name);
        setPhoneEdit(phone);
        setAddressEdit(address);
    }, [name, address, phone]);

    const handleEditProfile = async () => {
        try {
            await updateProfile({
                variables: { name: nameEdit, phone: phoneEdit, address: addressEdit }
            });

            setIsEditName(false)
            setIsEditPhone(false)
            setIsEditAddress(false)
        } catch (err) {
            console.log("Mutation Error: ", err)
        }
    }

    useEffect(() => {
        if (data?.updateProfile.status === "success") {
            const token = data.updateProfile.token

            localStorage.setItem("authToken", token);

            dispatch(getUserProfile({ token }))
        }
    }, [data, error])

    return (
        <>
            <Container className="flex flex-col justify-content-center align-items-center userprofile-container">
                <Card className="user-information-container">
                    <Row>
                        <Col md={4} className="avatar-container bg-info text-white text-center">
                            <img
                                src={MaleAvatar}
                                alt="user"
                                className="rounded"
                            />
                            {
                                isEditName ?
                                    <div className="flex justify-center gap-2">
                                        <input
                                            value={nameEdit}
                                            type="text"
                                            onChange={(e) => setNameEdit(e.target.value)}
                                        />
                                        <span
                                            className="text-decoration-underline ml-4 cursor-pointer"
                                            onClick={() => setIsEditName(false)}
                                        >
                                            done
                                        </span>
                                    </div>
                                    :
                                    <h4
                                        className="cursor-pointer"
                                        onClick={() => setIsEditName(true)}
                                    >
                                        {
                                            nameEdit
                                        } {name === nameEdit ? "" :
                                        <span className="text-[red]">*</span>}
                                    </h4>
                            }
                            <p>
                                {
                                    wallet === 0 ? "Unrank" :
                                        (() => {
                                            const foundRank = rankLevel.find(rankPoint =>
                                                rankPoint.minPoint <= wallet && wallet <= rankPoint.maxPoint
                                            );
                                            return foundRank.rankName;
                                        })()
                                }
                            </p>
                        </Col>
                        <Col md={8} className="bg-white p-4" style={{border: "1px solid #ccc"}}>
                            <h3 className="text-uppercase border-bottom pb-2 text-secondary">Information</h3>
                            <Row>
                                <Col>
                                    <h5>Email</h5>
                                    <p className="text-muted">{email}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Phone {phone === phoneEdit ? "" : <span className="text-[red]">*</span>}</h5>
                                    {
                                        isEditPhone ?
                                            <div>
                                                <input value={phoneEdit}
                                                       onChange={(e) => setPhoneEdit(e.target.value)}/>
                                                <span
                                                    className="text-decoration-underline cursor-pointer ms-2 text-[blue]"
                                                    onClick={() => setIsEditPhone(false)}
                                                >
                                            done
                                        </span>
                                            </div>
                                            :
                                            <p className="text-muted">
                                                {phoneEdit}
                                                <i
                                                    className="bi bi-pencil-square ms-2"
                                                    onClick={() => setIsEditPhone(true)}
                                                ></i>
                                            </p>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Address {address === addressEdit ? "" : <span className="text-[red]">*</span>}</h5>
                                    {
                                        isEditAddress ?
                                            <div>
                                                <input value={addressEdit}
                                                       onChange={(e) => setAddressEdit(e.target.value)}/>
                                                <span
                                                    className="text-decoration-underline cursor-pointer ms-2 text-[blue]"
                                                    onClick={() => setIsEditAddress(false)}
                                                >
                                            done
                                        </span>
                                            </div>
                                            :
                                            <p className="text-muted">
                                                {addressEdit}
                                                <i
                                                    className="bi bi-pencil-square ms-2"
                                                    onClick={() => setIsEditAddress(true)}
                                                ></i>
                                            </p>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>

                <Row className="button-container align-self-center mt-4">
                    <button
                        className="pt-[0.51rem] pb-[0.5rem] bg-[transparent] rounded-[2rem] border-[2px] text-[1.2rem] transition-all duration-500 border-[black] hover:bg-[black] hover:text-[white]"
                        onClick={() => handleEditProfile()}
                    >
                        Update Profile
                    </button>

                    <button
                        className="pt-[0.51rem] pb-[0.5rem] bg-[transparent] rounded-[2rem] border-[2px] text-[1.2rem] transition-all duration-500 border-[red] hover:bg-[red] hover:text-[white]"
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        Logout
                    </button>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        localStorage.removeItem("authToken")
                        dispatch(logoutAccount())
                        navigate("/account/login")}}>
                        Log out
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                loading ? <Loading /> : ""
            }
        </>
    )
}

export default UserProfileDetail;