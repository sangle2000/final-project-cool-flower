import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FeedbackUserCard from "./FeedbackUserCard";

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
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="feedback-wrapper">
        <motion.div ref={carouselRef} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {userComment.map((usrCmt) => {
              return (
                <motion.div key={usrCmt.id} className="card-container">
                  <FeedbackUserCard
                    name={usrCmt.name}
                    avatar={usrCmt.avatar}
                    comment={usrCmt.comment}
                    rate={usrCmt.rate}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Feedback;
