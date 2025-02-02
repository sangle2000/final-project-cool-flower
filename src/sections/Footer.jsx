function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-content-container">
          <div className="brand-info">
            <img
              src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
              alt="Brand Logo"
            />
            <span>Simply Natural</span>
            <div>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="quick-link"></div>
          <div className="important-link"></div>
          <div className="other"></div>
        </div>
        <div className="footer-desc-container"></div>
      </footer>
    </>
  );
}

export default Footer;
