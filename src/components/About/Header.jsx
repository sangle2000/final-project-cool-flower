import HeaderBackgroundWrapper from "../../sections/HeaderBackgroundWrapper.jsx";

function Header() {
    return (
        <>
            <h1>
                About Us
            </h1>
        </>
    )
}

const AboutHeader = HeaderBackgroundWrapper(Header)
export default AboutHeader;