import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Bucket = ({ title, subItems, handleListItemClick }) => (
  <div className="Bucket">
    <h3 className="Bucket__Title">{title}</h3>
    <ul className="Bucket__List">
      {subItems.map(subItem => (
        <li
          key={subItem.name}
          className={`Bucket__ListItem Bucket__ListItem_${subItem.programType}`}
          onClick={() => handleListItemClick(subItem)}
        >
          {subItem.name}
        </li>
      ))}
    </ul>
  </div>
);

Bucket.propTypes = {
  title: PropTypes.string,
  subItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    programType: PropTypes.oneOf(['PT', 'PTA'])
  })),
  handleListItemClick: PropTypes.func
};

export default Bucket;
