import NavBar from "../../components/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Services.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Services() {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavBar />
      <div className="services">
        <div className="servicesContainer">
          <div className="left">
            <h1>Search</h1>
            <input type="text" placeholder="Search House, Apartment or Room" />
            <div className="leftContainer">
              <h2>Filter By Location</h2>
              <div className="lContainer" onClick={() => setShow(!show)}>
                <div className="checkedC">
                  <input type="checkbox" />
                  <span>Dar es salaam</span>
                </div>
                {show ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="checkIcon"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="checkIcon"
                    onClick={() => setShow(!show)}
                  />
                )}
              </div>
              {show && (
                <div className="lContainerItem">
                  <span>Kigamboni</span>
                  <span>Temeke</span>
                  <span>Ilala</span>
                  <span>Posta</span>
                  <span>Ubungo</span>
                  <span>Mbezi</span>
                  <span>Kimara</span>
                </div>
              )}
            </div>
          </div>
          <div className="middle">
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>
                Category: <strong>Self Contained</strong>
              </p>
              <span>
                Number of Rooms: <strong>4</strong>
              </span>
              <span>
                Price: <strong>80,000 TZS per month</strong>
              </span>
              <span>
                Reach me here: <strong>0768 086 183</strong>
              </span>
              <span>
                Status: <strong>Available</strong>
              </span>
              <div className="location">
                <span>
                  City: <strong>Dar Es Salaam</strong>
                </span>
                <span>
                  District: <strong>kigamboni</strong>
                </span>
                <span>
                  Street: <strong>Ferry</strong>
                </span>
              </div>
              <span>
                Uploaded By: <strong>James</strong>
              </span>
              <button>Book Now</button>
            </div>
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
              <span>Status: Available</span>
              <div className="location">
                <span>City: Dar Es Salaam</span>
                <span>District: kigamboni</span>
                <span>Street: Ferry</span>
              </div>
              <button>Book House</button>
            </div>
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
              <span>Status: Available</span>
              <div className="location">
                <span>City: Dar Es Salaam</span>
                <span>District: kigamboni</span>
                <span>Street: Ferry</span>
              </div>
              <button>Book House</button>
            </div>
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
              <span>Status: Available</span>
              <div className="location">
                <span>City: Dar Es Salaam</span>
                <span>District: kigamboni</span>
                <span>Street: Ferry</span>
              </div>
              <button>Book House</button>
            </div>
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
              <span>Status: Available</span>
              <div className="location">
                <span>City: Dar Es Salaam</span>
                <span>District: kigamboni</span>
                <span>Street: Ferry</span>
              </div>
              <button>Book House</button>
            </div>
            <div className="middleContainer">
              <div className="imageContainer">
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/17109095/pexels-photo-17109095/free-photo-of-pufas-surrounding-small-table-and-tree-pot-in-lounge-area.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
              </div>
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
              <span>Status: Available</span>
              <div className="location">
                <span>City: Dar Es Salaam</span>
                <span>District: kigamboni</span>
                <span>Street: Ferry</span>
              </div>
              <button>Book House</button>
            </div>
          </div>
          <div className="right">
            <h1>Categories</h1>
            <h2>Filter By Category</h2>
            <div className="rightContainer">
              <span>Full House</span>
              <span>Apartment</span>
              <span>Self Contained</span>
              <span>Double Room</span>
              <span>Single Room</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
