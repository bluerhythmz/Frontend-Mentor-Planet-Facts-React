import React from "react";
import Burger from "../../assets/icon-hamburger.svg";
import Planets from "../../data.json";
import { NavLink } from "react-router-dom";
import Arrow from "../../assets/icon-chevron.svg";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from './Header.module.css'

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
      <header className={styles.header}>
        <div className={styles.headerTitleBox}>
          <h1 className={styles.headerTitle}>The Planets</h1>
          <img
            src={Burger}
            alt="Burger Navigation Button"
            onClick={handleClick}
            className={styles.headerBurger}
          />
        </div>
        <nav
          className={styles.nav}
          style={clicked ? { display: "block" } : { display: "none" }}
        >
          <ul className={styles.navLinks}>
            {Planets.map((planet) => {
              return (
                <li key={planet.name} className={styles.navLi}>
                  <div
                    className={styles.circle}
                    style={{ backgroundColor: planet.color }}
                  ></div>
                  <NavLink onClick={() => notMobile ? setClicked(true) : setClicked(false)} to={`/${planet.name}`} className={styles.navLink}>
                    {planet.name}
                  </NavLink>
                  <img src={Arrow} alt="" className={styles.navArrow} />
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
