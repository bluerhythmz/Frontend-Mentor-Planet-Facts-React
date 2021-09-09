import DataItem from "./DataItem";
import styles from './Data.module.css'

const Data = ({ data }) => {
  return (
    <div className={styles.data}>
      {Object.entries(data).map(([title, stat]) => (
        <DataItem key={title} title={title} stat={stat} />
      ))}
    </div>
  );
};

export default Data;
