import './App.css';
import TriangleImage from "./assets/triangle.svg.png";
function App() {
  return (
    <div className="App">
      <div className='triangle_container'>
        <img src={TriangleImage} className='triangle' alt='triangle' />
        <div className='button_container_top'>
          <p className='state_button'>Title 1</p>
        </div>
        <div className='button_container_bottom'>
          <p className='state_button button_1'>Title 2</p>
          <p className='state_button button_1'>Title 3</p>
        </div>
      </div>
    </div>

  );
}

export default App;
