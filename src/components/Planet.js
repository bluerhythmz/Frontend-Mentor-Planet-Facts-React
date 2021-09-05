import React from "react";
import { useEffect, useState } from "react";
import Data from "./Data";
import ImageDisplay from "./ImageDisplay";
import Text from "./Text";
import InfoTabs from "./InfoTabs";

const Planet = ({ location }) => {
  const [planet, setPlanet] = useState("");
  const [data, setData] = useState("");
  const [images, setImages] = useState("");
  const [image, setImage] = useState("");
  const [geologyImage, setGeologyImage] = useState("");
  const [text, setText] = useState("");
  const [textItem, setTextItem] = useState("");
  const [color, setColor] = useState("");
  const [activeButton, setActiveButton] = useState("overview");

  useEffect(() => {
    if (location !== undefined && location.planetProps !== undefined) {
      setPlanet(location.planetProps.planet);
      setData(location.planetProps.data);
      setImages(location.planetProps.images);
      setImage(location.planetProps.images[0].images.planet);
      setGeologyImage("");
      setText(location.planetProps.text);
      setTextItem("");
      setColor(location.planetProps.color);
      setActiveButton("overview");
    }
  }, [location, planet]);

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
    <>
      {planet && (
        <main className="grid">
          <InfoTabs text={text} handleClick={handleClick} activeButton={activeButton} color={color} />
          <ImageDisplay image={image} geologyImage={geologyImage} /> 
          <Text planet={planet} textItem={textItem} text={text} />
          <Data data={data} />
        </main>
      )}
    </>
  );
};

export default Planet;
