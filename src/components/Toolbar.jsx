const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <ul className="toolbar">
      {filters.map((item, index) => (
        <li className="toolbar__item" key={index}>
          <button
            className={`btn ${item === selected ? 'active' : ''}`}
            onClick={() => onSelectFilter(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Toolbar;