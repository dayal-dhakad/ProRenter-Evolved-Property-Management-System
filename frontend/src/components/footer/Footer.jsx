import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <hr />
        <div className="fContainer">
          <div className="fContainerList">
            <h1>Categories</h1>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
          </div>
          <div className="fContainerList">
            <h1>About</h1>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
          </div>
          <div className="fContainerList">
            <h1>Contact</h1>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
          </div>
          <div className="fContainerList">
            <h1>Services</h1>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
            <span>Apartment</span>
          </div>
        </div>
        <hr />
        <div className="footerList">
          <div className="list">
            <h1>RentalSystem</h1>
            <span>© RentalSystem International Ltd. 2023</span>
          </div>
          <div className="item">
            <i className="iconBrand fa-brands fa-facebook"></i>
            <i className="iconBrand fa-brands fa-instagram"></i>
            <i className="iconBrand fa-brands fa-twitter"></i>
            <i className="iconBrand fa-brands fa-whatsapp"></i>
            <i className="iconBrand fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
