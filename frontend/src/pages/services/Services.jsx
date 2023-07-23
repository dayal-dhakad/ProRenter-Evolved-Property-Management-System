import NavBar from "../../components/navBar/NavBar";
import "./Services.scss";

function Services() {
  return (
    <>
      <NavBar />
      <div className="services">
        <div className="servicesContainer">
          <div className="left">
            <h1>Filter</h1>
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
              <p>Category: Self Contained</p>
              <span>Price: 80,000 TZS per month</span>
              <span>Reach me here: 0768 086 183</span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
