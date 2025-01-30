function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="brand-container">
          <img
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
            alt="Brand Logo"
          />

          <span>Cool Flower</span>
        </div>
        <div className="menu-container">
          <span>Home</span>
          <span>Store</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>My Account</span>
        </div>

        <div className="user-container">
          <span>$0.00</span>
          <span>Cart</span>
          <span>User</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
