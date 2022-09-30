import "./App.css";
import Carousel from "./carousel/Carousel";
function App() {
  return (
    <Carousel show={1} infiniteLoop>
      <div className="item">
        <div style={{ padding: 8 }}>1</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>2</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>3</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>4</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>5</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>6</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>7</div>
      </div>
      <div className="item">
        <div style={{ padding: 8 }}>8</div>
      </div>
    </Carousel>
    // </div>
  );
}

export default App;
