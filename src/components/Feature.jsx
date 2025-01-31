import ShoppingItemCard from "./Home/ShoppingItemCard";

const plantData = [
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
    name: "Money Plant",
    type: "Plants",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
    star: 0,
    originPrice: 23.0,
    currentPrice: 20.0,
    sale: true,
  },
  {
    id: 4,
    name: "Old Lady Cactus",
    type: "Cactus",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
    star: 0,
    originPrice: 15.0,
    currentPrice: 12.0,
    sale: true,
  },
  {
    id: 5,
    name: "Piorro Quisquam",
    type: "Plants",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    star: 0,
    originPrice: 0,
    currentPrice: 32.0,
    sale: false,
  },
  {
    id: 6,
    name: "Rattle Snake Tail",
    type: "Plants",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    star: 0,
    originPrice: 0,
    currentPrice: 45.0,
    sale: false,
  },
  {
    id: 7,
    name: "Star Cactus",
    type: "Cactus",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
    star: 0,
    originPrice: 34.0,
    currentPrice: 30.0,
    sale: true,
  },
];

function Feature() {
  return (
    <>
      <div className="feature-container">
        <span className="feature-title">Featured Plants</span>
        <span className="feature-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>

        <ShoppingItemCard />
      </div>
    </>
  );
}

export default Feature;
