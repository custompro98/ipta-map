import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const InfoBox = ({ program }) => {
  return (
    <div className="InfoBox">
      <div className="InfoBox__Header">
        <span className="InfoBox__Title">{program.name}</span>
        <span className="InfoBox__Program_Type">{program.programType}</span>
      </div>
      <div className="InfoBox__Body">
        <span className="InfoBox__Address">{program.address.street}</span>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  program: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
    }),
    region: PropTypes.string,
    programType: PropTypes.oneOf(['PT', 'PTA'])
  })
}

export default InfoBox;
