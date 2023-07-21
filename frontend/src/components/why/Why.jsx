import "./Why.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBed,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div className="why">
      <div className="whyContainer">
        <h1>Why choose Us</h1>
        <p>This is what's make our service better than any one!</p>
        <div className="whyContainerList">
          <div className="whyContainerListItem">
            <FontAwesomeIcon icon={faBars} className="iconWhy" />
            <h2>Easy Booking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              earum quo quae assumenda dolorem magni enim distinctio minima
              dolore alias! Porro dicta optio quaerat. Molestiae alias
              voluptatem iusto similique? Nulla?
            </p>
          </div>
          <div className="whyContainerListItem">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="iconWhy" />
            <h2>Affordable Price</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              earum quo quae assumenda dolorem magni enim distinctio minima
              dolore alias! Porro dicta optio quaerat. Molestiae alias
              voluptatem iusto similique? Nulla?
            </p>
          </div>
          <div className="whyContainerListItem">
            <FontAwesomeIcon icon={faBed} className="iconWhy" />
            <h2>100% Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              earum quo quae assumenda dolorem magni enim distinctio minima
              dolore alias! Porro dicta optio quaerat. Molestiae alias
              voluptatem iusto similique? Nulla?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
