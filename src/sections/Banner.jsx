import {useEffect, useRef, useState} from "react";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {bannerImages} from "../utils/constant.js";

function Banner() {
    const [swiper, setSwiper] = useState(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const navRef = useRef(document.querySelector(".navbar"));

    useEffect(() => {
        if (!swiper) return;

        const timer = setInterval(() => {
            if (swiper.activeIndex === activeIndex) {
                swiper.slideNext(); // Move to next slide after 5s of inactivity
            }
        }, 5000);

        return () => clearTimeout(timer); // Cleanup on index change
    }, [activeIndex, swiper]);

    useEffect(() => {
        if (!navRef.current) return;

        console.log(navRef.current.offsetHeight);
    }, [navRef]);

    return (
        <>
            <Swiper
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                effect={'slide'}
                grabCursor={false} // Disable grab cursor
                allowTouchMove={false} // Disable touch/mouse dragging
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                modules={[Navigation, Pagination]}
                simulateTouch={false}
            >
                {
                    bannerImages.map((banner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    src={banner}
                                    alt={"Banner"}
                                    style={{
                                        width: "100%",
                                        marginTop: "106px"
                                    }}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Banner;