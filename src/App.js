import "./App.css";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { Route, Redirect, useLocation } from "react-router-dom";
import { planetImages } from "./components/ImageImports";
import Planets from "./data.json";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const getImages = (name) => {
    return planetImages.filter((item) => item.planet === name);
  };
  const location = useLocation();

  return (
    <div className="wrapper">
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={250} classNames="fade" key={location.key}>
          <div key={location}>
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
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Redirect to="/Mercury" />
    </div>
  );
}

export default App;
