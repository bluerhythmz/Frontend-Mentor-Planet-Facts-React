import SourceIcon from "../assets/icon-source.svg";

const Text = ({ planet, textItem, text }) => {
  return (
    <div className="text">
      <h2 className="text__title">{planet}</h2>
      <div className="text__description">
        {textItem ? textItem.content : text.overview.content}
      </div>
      <span className="text__source">
        Source:
        <a
          href={textItem ? textItem.source : text.overview.source}
          className="source"
        >
          Wikipedia
          <img src={SourceIcon} alt="link-icon" className="source__img" />
        </a>
      </span>
    </div>
  );
};

export default Text;
