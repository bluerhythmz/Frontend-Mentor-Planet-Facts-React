import styles from './Data.module.css'

const DataItem = ({ title, stat }) => {
  return (
    <div className={styles.dataItem}>
      <div className={styles.dataTitle}>{title}</div>
      <div className={styles.dataStat}>{stat}</div>
    </div>
  );
};

export default DataItem;
