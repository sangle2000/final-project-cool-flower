import Header from "../components/Store/Header.jsx";
import RecommendProduct from "../components/Store/RecommendProduct.jsx";
import Productions from "../components/Store/Productions.jsx";
import Helper from "../components/Helper.jsx";

function Store() {
    return (
        <>
            <Header image="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/store-bg.jpg" />

            <RecommendProduct />

            <Productions />

            <Helper />

            <div className="blank" style={{ width: "100vw", marginTop: "8rem" }}></div>
        </>
    )
}

export default Store;