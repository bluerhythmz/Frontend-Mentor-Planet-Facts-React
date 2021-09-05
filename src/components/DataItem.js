const DataItem = ({ title, stat }) => {
  return (
    <div className="data__item">
      <div className="data__title">{title}</div>
      <div className="data__stat">{stat}</div>
    </div>
  );
};

export default DataItem;
