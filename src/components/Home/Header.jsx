import HeaderBackgroundWrapper from "../../sections/HeaderBackgroundWrapper.jsx";

function Header() {
  return (
    <>
        <span className="header-title">Best Quality Plants</span>
        <span className="header-content">
          Amazing Variety Of Plants Starting Just $6
        </span>
        <span className="header-button">Shop now</span>
    </>
  );
}

const WrappedHeader = HeaderBackgroundWrapper(Header);

export default WrappedHeader;