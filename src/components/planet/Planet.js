import React from "react";
import { useEffect, useState } from "react";
import Data from "../data/Data";
import ImageDisplay from "../imageDisplay/ImageDisplay";
import Text from "../text/Text";
import InfoTabs from "../infoTabs/InfoTabs";
import styles from './Planet.module.css'

const Planet = ({ planet, images, color, text, data }) => {
  const [activeButton, setActiveButton] = useState("overview");
  const [textItem, setTextItem] = useState("");
  const [image, setImage] = useState("");
  const [geologyImage, setGeologyImage] = useState("");

  useEffect(() => {
    setImage(images[0].images.planet);
  }, [images]);

  const handleClick = (button, value) => {
    setTextItem(value);
    setActiveButton(button);
    switch (button) {
      case "structure":
        setImage(images[0].images.internal);
        setGeologyImage("");
        break;
      case "geology":
        setImage(images[0].images.planet);
        setGeologyImage(images[0].images.geology);
        break;
      default:
        setImage(images[0].images.planet);
        setGeologyImage("");
    }
  };

  return (
    <main className={styles.grid}>
      <InfoTabs
        text={text}
        handleClick={handleClick}
        activeButton={activeButton}
        color={color}
      />
      <ImageDisplay image={image} geologyImage={geologyImage} />
      <Text planet={planet} textItem={textItem} text={text} />
      <Data data={data} />
    </main>
  );
};

export default Planet;
