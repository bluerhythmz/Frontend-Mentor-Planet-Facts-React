import React from "react";
import { useState } from "react";
import Data from "../data/Data";
import ImageDisplay from "../imageDisplay/ImageDisplay";
import Text from "../text/Text";
import InfoTabs from "../infoTabs/InfoTabs";
import styles from "./Planet.module.css";
import { motion } from "framer-motion";

const Planet = ({ planet, images, color, text, data }) => {
  const [activeButton, setActiveButton] = useState("overview");
  const [textItem, setTextItem] = useState("");
  const [image, setImage] = useState(images[0].images.planet);

  let geologyImage = activeButton === "geology" ? images[0].images.geology : "";

  const handleClick = (button, value) => {
    setTextItem(value);
    setActiveButton(button);
    switch (button) {
      case "structure":
        setImage(images[0].images.internal);
        break;
      case "geology":
        setImage(images[0].images.planet);
        break;
      default:
        setImage(images[0].images.planet);
    }
  };

  return (
    <motion.div
      className={styles.grid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InfoTabs
        text={text}
        handleClick={handleClick}
        activeButton={activeButton}
        color={color}
      />
      <ImageDisplay image={image} geologyImage={geologyImage} />
      <Text planet={planet} textItem={textItem} text={text} />
      <Data data={data} />
    </motion.div>
  );
};

export default Planet;
