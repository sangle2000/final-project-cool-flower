import {useQuery} from "@apollo/client";
import {USER_ORDER_DATA_QUERY} from "../utils/graphql/queries.js";
import {useEffect, useState} from "react";
import {deliveryStatus} from "../utils/constant.js";

function Order() {
    const [orderData, setOrderData] = useState([]);

    const { data, loading, error } = useQuery(USER_ORDER_DATA_QUERY)

    useEffect(() => {
        console.log(data)

        if (!data) return;

        console.log(data.userOrderData.data)

        setOrderData(data.userOrderData.data);
    }, [data])

    return (
        <>
            <div className="container">
                <article className="card">
                    <header className="card-header"> My Orders / Tracking</header>
                    {
                        orderData && orderData.length > 0 &&
                        orderData.map((order, index) => (
                            <div className="card-body" key={index}>
                                <h6>Order ID: {order.orderCode}</h6>
                                <div className="track">
                                    <div className={`step ${deliveryStatus[order.orderStatus] > 0 ? "active" : ""}`}><span className="icon"> <i
                                        className="fa fa-check"></i> </span>
                                        <span className="text">Order confirmed</span></div>
                                    <div className={`step ${deliveryStatus[order.orderStatus] > 1 ? "active" : ""}`}><span className="icon"> <i
                                        className="fa fa-user"></i> </span>
                                        <span className="text"> Picked by courier</span></div>
                                    <div className={`step ${deliveryStatus[order.orderStatus] > 2 ? "active" : ""}`}><span className="icon"> <i
                                        className="fa fa-truck"></i> </span>
                                        <span
                                            className="text"> On the way </span></div>
                                    <div className={`step ${deliveryStatus[order.orderStatus] > 3 ? "active" : ""}`}><span className="icon"> <i className="fa fa-box"></i> </span>
                                        <span
                                            className="text">Ready for pickup</span></div>
                                </div>
                                <hr/>
                                <ul className="row">
                                    {
                                        order.itemsList.map((item, index) => (
                                            <li className="col-md-4" key={index}>
                                                <figure className="itemside mb-3">
                                                    <div className="aside">
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.productName}
                                                            className="img-sm border"
                                                        />
                                                    </div>
                                                    <figcaption className="info align-self-center">
                                                        <p className="title">{item.productName} <br/> x{item.quantity}
                                                        </p> <span
                                                        className="text-muted"> {((item.price - (item.price * item.salePercent)) * item.quantity).toLocaleString("de-DE")} VNĐ </span>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr/>
                                <a href="#" className="btn btn-warning" data-abc="true"> <i
                                    className="fa fa-chevron-left"></i> Back to orders</a>
                            </div>
                        ))
                    }
                </article>
            </div>
        </>
    )
}

export default Order;