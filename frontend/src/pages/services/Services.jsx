import NavBar from "../../components/navBar/NavBar";
import axios from "axios";
import "./Services.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Services() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/services" + search
      );
      setData(res.data);
    };
    getPosts();
  }, [search]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategory(res.data);
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      const res = await axios.get("http://localhost:5000/api/location");
      setLocation(res.data);
    };
    getLocation();
  }, []);

  const handleClick = (index) => {
    if (show === index) {
      setShow(false);
    } else {
      setShow(index);
    }
  };

  return (
    <>
      <NavBar />
      <div className="services">
        <div className="servicesContainer">
          <div className="left">
            <h1>Search</h1>
            <input type="text" placeholder="Search House, Apartment or Room" />
            <h2>Filter By Location</h2>
            {location.map((itemLocation, index) => (
              <div className="leftContainer" key={itemLocation._id}>
                <div className="lContainer" onClick={() => handleClick(index)}>
                  <div className="checkedC">
                    <input type="checkbox" />
                    {itemLocation && (
                      <Link
                        to={`/services/?city=${itemLocation.cityName}`}
                        className="link"
                      >
                        <span>{itemLocation.cityName}</span>
                      </Link>
                    )}
                  </div>
                </div>
                {show === index && (
                  <div className="lContainerItem">
                    {itemLocation.districtName.map((i) => (
                      <Link
                        to={`/services/?district=${i}`}
                        className="link"
                        key={i}
                      >
                        <span>{i}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="middle">
            {data.map((item) => (
              <div className="middleContainer" key={item._id}>
                {item.photo && (
                  <div className="imageContainer">
                    {item.photo.map((i) => (
                      <img src={i} alt="" key={i} />
                    ))}
                  </div>
                )}
                <p>
                  Category: <strong>{item.category}</strong>
                </p>
                <span>
                  Number of Rooms: <strong>{item.roomNumber}</strong>
                </span>
                <span>
                  Price: <strong>{item.price} TZS per month</strong>
                </span>
                <span>
                  Reach me here: <strong>{item.phoneNumber}</strong>
                </span>
                <span>
                  Status: <strong>{item.status}</strong>
                </span>
                <div className="location">
                  <span>
                    City: <strong>{item.city}</strong>
                  </span>
                  <span>
                    District: <strong>{item.district}</strong>
                  </span>
                  <span>
                    Street: <strong>{item.street}</strong>
                  </span>
                </div>
                <span>
                  Uploaded By: <strong>James</strong>
                </span>
                <span>
                  Time uploaded:{" "}
                  <strong>{new Date(item.createdAt).toDateString()}</strong>
                </span>
                <button>Book Now</button>
              </div>
            ))}
          </div>
          <div className="right">
            <h1>Categories</h1>
            <h2>Filter By Category</h2>
            {category.map((itemCategory) => (
              <div className="rightContainer" key={itemCategory._id}>
                {itemCategory.name.map((i) => (
                  <Link to={`/services/?cat=${i}`} className="link" key={i}>
                    <span key={i}>{i}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
