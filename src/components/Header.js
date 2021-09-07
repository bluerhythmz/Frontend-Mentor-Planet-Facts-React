import React from "react";
import Burger from "../assets/icon-hamburger.svg";
import Planets from "../data.json";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/icon-chevron.svg";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const notMobile = useMediaQuery({ query: `(min-width: 700px)` });

  useEffect(() => {
    if (notMobile) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [notMobile]);

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
                  <div
                    className="circle"
                    style={{ backgroundColor: planet.color }}
                  ></div>

                  <NavLink to={`/${planet.name}`} className="nav__link">
                    {planet.name}
                  </NavLink>
                  <img src={Arrow} alt="" className="nav__arrow" />
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
