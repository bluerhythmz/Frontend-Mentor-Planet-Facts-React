import { useMediaQuery } from "react-responsive";

const Button = ({ title, value, num, handleClick, activeButton, color }) => {
  const notMobile = useMediaQuery({ query: `(min-width: 700px)` });

  const fullTitle = (title) => {
    if (title === "structure") {
      return (title = "Internal Structure");
    } else if (title === "geology") {
      return (title = "Surface Geology");
    } else {
      return title;
    }
  };

  return (
    <button
      style={
        activeButton === title && notMobile
          ? { backgroundColor: color }
          : activeButton === title && !notMobile
          ? { borderBottom: `2px solid ${color}`, color: "#ffffff" }
          : {}
      }
      onClick={() => handleClick(title, value)}
      className={`info-button`}
    >
      {notMobile ? (
        <>
          <span>0{num}</span>
          {" " + fullTitle(title)}
        </>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
