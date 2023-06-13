/** @format */
import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldbg
    })` }}>
          <div className="overlay">       
              <div className="container">
            <div className="section section__inputs">
                  <input type="text"
                    name="city"
                    placeholder="Enter City..."
                  />
                  <button>°F</button>
                </div>
    
                <div className="section section__temperature">
                  <div className="icon">
                  <h3>London, GB</h3>
    
                    <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather Condition Icon"
                  />
    
                    <h3>Cloudy</h3>
    
                  </div>
                  <div className="temperature">
                    <h1>34 °C</h1>
    
                  </div>
                </div>      
              
              </div>            
          </div>
        </div>
      );
    }
    
    export default App;
    
    