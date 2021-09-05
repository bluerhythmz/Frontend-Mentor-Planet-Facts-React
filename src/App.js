import "./App.css";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { planetImages } from "./components/ImageImports";
import Planets from "./data.json";

function App() {
  const getImages = (name) => {
    return planetImages.filter((item) => item.planet === name);
  };

  return (
    <Router>
      <div className="wrapper">
        <Header />
        {Planets.map((planet) => (
          <Route key={planet.name} path={`/${planet.name}`}>
            <Planet
              location={{
                planetProps: {
                  planet: planet.name,
                  images: getImages(planet.name),
                  color: planet.color,
                  text: {
                    overview: planet.overview,
                    structure: planet.structure,
                    geology: planet.geology,
                  },
                  data: {
                    "rotation time": planet.rotation,
                    "revolution time": planet.revolution,
                    radius: planet.radius,
                    "average temp": planet.temperature,
                  },
                },
              }}
            />
          </Route>
        ))}
        <Redirect from="/" to="/Mercury" />
      </div>
    </Router>
  );
}

export default App;
