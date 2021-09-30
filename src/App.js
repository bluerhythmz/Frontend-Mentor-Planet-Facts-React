import "./App.css";
import Header from "./components/header/Header";
import Planet from "./components/planet/Planet";
import { Route, Redirect, Switch } from "react-router-dom";
import { planetImages } from "./components/ImageImports";
import Planets from "./data.json";
import { AnimatePresence } from "framer-motion";

function App() {
  const getImages = (name) => {
    return planetImages.filter((item) => item.planet === name);
  };

  return (
    <div className="wrapper">
      <Header />
      <AnimatePresence>
        <Switch>
          {Planets.map((planet) => (
            <Route key={planet.name} path={`/${planet.name}`}>
              <Planet
                planet={planet.name}
                images={getImages(planet.name)}
                color={planet.color}
                text={{
                  overview: planet.overview,
                  structure: planet.structure,
                  geology: planet.geology,
                }}
                data={{
                  "rotation time": planet.rotation,
                  "revolution time": planet.revolution,
                  radius: planet.radius,
                  "average temp": planet.temperature,
                }}
              />
            </Route>
          ))}
          <Redirect to="/Mercury" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
