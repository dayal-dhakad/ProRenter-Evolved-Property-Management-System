import "./Upload.scss";
import NavBar from "../../components/navBar/NavBar";

function Upload() {
  return (
    <>
      <NavBar />
      <div className="upload">
        <div className="uploadContainer">
          <h1>Upload your House, Apartment or Room Here</h1>
          <div className="imageFolder">
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <form action="">
            <div className="label">
              <label htmlFor="">Category</label>
              <input type="file" placeholder="Full house, apartment or room" />
            </div>
            <div className="label">
              <label htmlFor="">Category</label>
              <input type="text" placeholder="Full house, apartment or room" />
            </div>
            <div className="label">
              <label htmlFor="">Number of Rooms</label>
              <input type="number" placeholder="Number of Rooms" />
            </div>
            <div className="label">
              <label htmlFor="">price</label>
              <input type="number" placeholder="Price" />
            </div>
            <div className="label">
              <label htmlFor="">Reach Me Here</label>
              <input type="number" placeholder="Your Phone Number" />
            </div>
            <div className="label">
              <label htmlFor="">Status</label>
              <input type="text" placeholder="Available or Unavailable" />
            </div>
            <div className="label">
              <label htmlFor="">City</label>
              <input type="text" placeholder="City" />
            </div>
            <div className="label">
              <label htmlFor="">District</label>
              <input type="text" placeholder="District" />
            </div>
            <div className="label">
              <label htmlFor="">Street</label>
              <input type="text" placeholder="Street" />
            </div>
            <button>Upload</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Upload;
