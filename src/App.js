import "./App.css";
import "./scss/main.scss";
import image1 from "../src/img/image1.png";
import eyeSolid from "../src/img/eye-solid.svg";

function App() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h4>Welcome</h4>
        <div className="cards-container">
          <div className="cards">
            <div className="single-card">
              <div className="card-header">
                <span className="company">Test Integration</span>
                <img alt="" src={eyeSolid} className="eye" />
              </div>
              <div className="image">
                <img alt="" src={image1} className="company-logo" />
              </div>
              <div className="company-data">
                <span>Created At: 2021-06-05</span>
                <span>Updated At: 2021-06-05</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="single-card">
              <div>abdh</div>
            </div>
          </div>
          <div className="cards">
            <div className="single-card">
              <div>abdh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
