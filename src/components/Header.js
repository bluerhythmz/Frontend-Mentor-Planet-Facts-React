import React from "react";
import Burger from "../assets/icon-hamburger.svg";
import Planets from "../data.json";
import { NavLink, Route, useHistory, Switch } from "react-router-dom";
import Arrow from "../assets/icon-chevron.svg";
import { useState, useEffect } from "react";
import Planet from "./Planet";
import { useMediaQuery } from "react-responsive";
import { planetImages } from "./ImageImports";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const history = useHistory();

  /* const handleHistory = (path) => {
    history.push(path);
  }; */

  const notMobile = useMediaQuery({ query: `(min-width: 700px)` });
  useEffect(() => {
    if (notMobile) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [notMobile]);

  const getImages = (name) => {
    return planetImages.filter((item) => item.planet === name);
  };

  return (
    <>
      <header className="header">
        <div className="header__title-box">
          <h1 className="header__title">The Planets</h1>
          <img
            src={Burger}
            alt="Burger Navigation Button"
            onClick={handleClick}
            className="header__burger"
          />
        </div>
        <nav
          className="nav"
          style={clicked ? { display: "block" } : { display: "none" }}
        >
          <ul className="nav__links">
            {Planets.map((planet) => {
              return (
                <li key={planet.name} className="nav__li">
                  {!notMobile && (
                    <div
                      className="circle"
                      style={{ backgroundColor: planet.color }}
                    ></div>
                  )}
                  <NavLink
                    to={{
                      pathname: `/${planet.name}`,
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
                          "radius": planet.radius,
                          "average temp": planet.temperature,
                        },
                      },
                    }}
                    className="nav__link"
                  >
                    {planet.name}
                  </NavLink>
                  <img src={Arrow} alt="" className="nav__arrow" />
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" component={Planet} />
      </Switch>
    </>
  );
};

export default Header;
