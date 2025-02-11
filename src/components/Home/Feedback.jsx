import {useEffect, useRef, useState} from "react";
import FeedbackUserCard from "./FeedbackUserCard";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper/modules";

const userComment = [
    {
        id: 0,
        name: "Sang Lê",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },

    {
        id: 1,
        name: "Diệp Hân",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },

    {
        id: 2,
        name: "Thanh Sang",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },

    {
        id: 3,
        name: "Ngọc Hân",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },

    {
        id: 4,
        name: "Sang Hân",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },
];

function Feedback() {

    return (
        <>
            <div className="feedback-wrapper">
                <Swiper
                    effect={'slide'}
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    modules={[Navigation, Pagination]}
                >
                    {
                        userComment.map((usrCmt) => {
                            return (
                                <SwiperSlide
                                    key={usrCmt.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "30%",
                                    }}>
                                    <FeedbackUserCard name={usrCmt.name} avatar={usrCmt.avatar} comment={usrCmt.comment}
                                                      rate={usrCmt.rate}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

export default Feedback;
