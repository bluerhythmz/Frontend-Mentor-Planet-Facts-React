import SourceIcon from "../../assets/icon-source.svg";
import styles from './Text.module.css'

const Text = ({ planet, textItem, text }) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.textTitle}>{planet}</h2>
      <div className={styles.textDescription}>
        {textItem ? textItem.content : text.overview.content}
      </div>
      <span className={styles.textSource}>
        Source:
        <a
          href={textItem ? textItem.source : text.overview.source}
          className={styles.source}
        >
          Wikipedia
          <img src={SourceIcon} alt="link-icon" className={styles.sourceImg} />
        </a>
      </span>
    </div>
  );
};

export default Text;
