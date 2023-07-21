import "./News.scss";

function News() {
  return (
    <div className="news">
      <div className="newsContainer">
        <h1>Subscribe to our Newsletter</h1>
        <p>Enter your Email address to get daily offers and news</p>
        <form action="">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default News;
