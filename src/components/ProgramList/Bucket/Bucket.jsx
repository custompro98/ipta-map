import React from 'react';
import './styles.css';

const Bucket = ({ title, subItems }) => (
  <div className="Bucket">
    <h3 className="Bucket__Title">{title}</h3>
    <ul className="Bucket__List">
      {subItems.map(subItem => (
        <li key={subItem.name} className={`Bucket__ListItem Bucket__ListItem_${subItem.programType}`}>
          {subItem.name}
        </li>
      ))}
    </ul>
  </div>
);

export default Bucket;
