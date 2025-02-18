import Feature from "../components/Feature";
import CollectionCard from "../components/Home/CollectionCard";
import Feedback from "../components/Home/Feedback";
import Header from "../components/Home/Header";
import Helper from "../components/Helper";
import HomeHeader from "../components/Home/Header";
import Policy from "../components/Home/Policy.jsx";
import HomeFooter from "../components/HomeFooter.jsx";

const data = [
  {
    id: 0,
    name: "Beautiful Plant Varieties",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },

  {
    id: 1,
    name: "Trendy Cactus Varieties",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },

  {
    id: 2,
    name: "Gardening Accessories",
    image:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    desc: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

function Home() {
  return (
    <>
      <HomeHeader image="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/hero-bg.jpg" />

      <Policy />

      <div className="collection-card-container">
        {data.map((item) => {
          return (
            <CollectionCard
              key={item.id}
              name={item.name}
              image={item.image}
              desc={item.desc}
            />
          );
        })}
      </div>

      <Feature />
      <Helper />
      <Feedback />
      <HomeFooter />
    </>
  );
}

export default Home;
