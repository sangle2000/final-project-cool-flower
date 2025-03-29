import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {useMutation} from "@apollo/client";
import {ORDER_MUTATION} from "../utils/graphql/mutations.js";
import {useOrderInformation} from "../store/OrderInformationProvider.jsx";
import Loading from "../sections/Loading.jsx";

const PaymentReturn = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [orders, { data, loading, error }] = useMutation(ORDER_MUTATION)

    const createOrder = async () => {
        const orderInformation = JSON.parse(localStorage.getItem("orderInformation") || "{}");

        console.log({
            paymentMethods: "VNPAY",
            paymentSuccess: true,
            orderInformation
        })

        try {
            await orders({
                variables: {
                    paymentMethods: "VNPAY",
                    paymentSuccess: true,
                    orderInformation
                },
                fetchPolicy: "no-cache"
            })
        } catch (err) {
            throw new Error(`Failed to create Order: ${err}`);
        }
    }

    useEffect(() => {
        const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");

        if (vnp_ResponseCode === "00") {
            createOrder()
        } else {
            alert("Payment Failed!");
            navigate("/failed");
        }
    }, [searchParams, navigate]);

    useEffect(() => {
        console.log(error)

        if (!data) return;

        // localStorage.removeItem("orderInformation"); // Clear after restoring

        navigate("/orders");
    }, [data, error])

    return (
        loading && <Loading />
    );
};

export default PaymentReturn;