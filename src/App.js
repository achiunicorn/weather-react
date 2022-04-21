import "./App.css";
import "./Header.css";
import "./CurrentWeather.css";
import "./Forecast.css";
import "./Footer.css";
import Search from "./Search.js";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="container">
          <div className="card app">
            <div className="card-body">
              <Search />
              <Header />
              <CurrentWeather />
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
