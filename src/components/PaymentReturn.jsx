import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentReturn = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");

        if (vnp_ResponseCode === "00") {
            alert("Payment Successful!");
            navigate("/success");
        } else {
            alert("Payment Failed!");
            navigate("/failed");
        }
    }, [searchParams, navigate]);

    return <div>Processing payment...</div>;
};

export default PaymentReturn;