import HeaderBackgroundWrapper from "../../sections/HeaderBackgroundWrapper.jsx";

function Header() {
    return(
        <>
            <h1>
                Contact
            </h1>
        </>
    )
}

const ContactHeader = HeaderBackgroundWrapper(Header)
export default ContactHeader