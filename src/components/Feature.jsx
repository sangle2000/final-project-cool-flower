import ShoppingItemCard from "./Home/ShoppingItemCard";
import {plantData} from "../utils/constant.js";

function Feature() {
  return (
    <>
      <div className="feature-container">
        <span className="feature-title">Featured Plants</span>
        <span className="feature-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <div className="feature-item-card-container">
          {plantData.map((data) => {
            return (
              <ShoppingItemCard
                code={data.code}
                key={data.id}
                image={data.image}
                name={data.name}
                type={data.type}
                isSale={data.sale}
                oldPrice={data.originPrice}
                currentPrice={data.currentPrice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feature;
