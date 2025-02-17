import ShoppingItemCard from "../Home/ShoppingItemCard.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper/modules";
import FeedbackUserCard from "../Home/FeedbackUserCard.jsx";
import {useEffect, useState} from "react";

function RecommendProduct() {
    const recommendProducts = [
        {
            id: 0,
            name: "Boncellensis Secullant",
            type: "Plants",
            image:
                "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
            star: 0,
            originPrice: 0,
            currentPrice: 34.0,
            sale: false,
        },
        {
            id: 1,
            name: "Cleistocactus",
            type: "Cactus",
            image:
                "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
            star: 0,
            originPrice: 28.0,
            currentPrice: 25.0,
            sale: true,
        },
        {
            id: 2,
            name: "Green Soil Lotus",
            type: "Plants",
            image:
                "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
            star: 0,
            originPrice: 54.0,
            currentPrice: 34.0,
            sale: true,
        },
        {
            id: 3,
            name: "Mini San Pedro Cactus",
            type: "Cactus",
            image:
                "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus1-free-img.jpg",
            star: 0,
            originPrice: 32.00,
            currentPrice: 32.00,
            sale: false,
        }
    ];

    const [swiperRef, setSwiperRef] = useState(null);
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

    return (
        <>
            <div className="recommend-product-container">
                <h1 className="recommend-product-title">
                    Recommend For You
                </h1>

                <div className="recommend-product-content">
                    <Swiper
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        effect={'slide'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        modules={[Navigation, Pagination]}
                    >
                        {
                            recommendProducts.map((product) => {
                                return (

                                    <SwiperSlide
                                        key={product.id}
                                        className="card-container"
                                    >
                                        <ShoppingItemCard
                                            image={product.image}
                                            name={product.name}
                                            type={product.type}
                                            isSale={product.sale}
                                            oldPrice={product.originPrice}
                                            currentPrice={product.currentPrice}

                                            style={{ justifyContent: "center", alignItems: "center" }}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default RecommendProduct;