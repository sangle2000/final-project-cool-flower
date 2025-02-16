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
          <div className="quick-link">
            <span>Quick Links</span>
            <ul>
              <li>Introduction</li>
              <li>Know more About Us</li>
              <li>Visit Store</li>
              <li>Let’s Connect</li>
            </ul>
          </div>
          <div className="important-link">
            <span>Important Links</span>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Terms & Conditions</li>
              <li>Media Kit</li>
            </ul>
          </div>
          <div className="other">
            <p className="other-title">
              Get In Touch With Us For The Best Quality Plants & Succulents
            </p>

            <p
              style={{
                color: "#5D6167",
              }}
            >
              Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora
              incidunt lores ta porro ame.
            </p>
          </div>
        </div>
        <div className="footer-desc-container">
        </div>
      </footer>
    </>
  );
}

export default Footer;
