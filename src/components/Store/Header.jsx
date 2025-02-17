import HeaderBackgroundWrapper from "../../sections/HeaderBackgroundWrapper.jsx";

function Header() {
    return (
        <>
            <h1 style={{ fontSize: "4rem" }}>
                Store
            </h1>
        </>
    )
}

const StoreHeader = HeaderBackgroundWrapper(Header)

export default StoreHeader;