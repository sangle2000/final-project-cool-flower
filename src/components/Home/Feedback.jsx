import {useEffect, useState} from "react";
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

    {
        id: 5,
        name: "Sang Hân",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },

    {
        id: 6,
        name: "Sang Hân",
        avatar:
            "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
        comment:
            "Đây là sản phẩm tuyệt vời nhất mà tôi từng thấy, tôi sẽ tiếp tục ủng hộ shop này",
        rate: 5,
    },
];

function Feedback() {

    const [swiperRef, setSwiperRef] = useState(null);
    const [device, setDevice] = useState("");

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!swiperRef) return;

        const timer = setInterval(() => {
            if (swiperRef.activeIndex === activeIndex) {
                swiperRef.slideNext(); // Move to next slide after 5s of inactivity
            }
        }, 5000);

        return () => clearTimeout(timer); // Cleanup on index change
    }, [activeIndex, swiperRef]);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            if (width <= 1024) {
                setDevice("Mobile");
            }
            else {
                setDevice("PC");
            }
        };

        checkDevice(); // Run on mount
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return (
        <>
            <div className="feedback-wrapper">
                <h1 className="feedback-title">
                    Customer Feedback
                </h1>

                <Swiper
                    onSwiper={setSwiperRef}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    effect={'slide'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={device === "PC" ? 5 : 'auto'}
                    spaceBetween={0}
                    modules={[Navigation, Pagination]}
                >
                    {
                        userComment.map((usrCmt) => {
                            return (
                                <SwiperSlide
                                    key={usrCmt.id}
                                    className="card-container"
                                >
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
