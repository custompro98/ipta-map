import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket/Bucket';
import './styles.css';

const ProgramList = ({ programs, onListItemClick }) => {
  const programsByRegion = programs.reduce((accum, program) => {
    if (accum[program.region] && accum[program.region].length > 0) {
      accum[program.region].push(program);
    } else {
      accum[program.region] = [program];
    }

    return accum;
  }, {});

  return (
    <ul className="ProgramList">
      {Object.keys(programsByRegion).map(region => (
        <li key={region} className="ProgramList__Program">
          <Bucket title={region} subItems={programsByRegion[region]} handleListItemClick={onListItemClick} />
        </li>
      ))}
    </ul>
  );
};

ProgramList.propTypes = {
  programs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape(null),
    programType: PropTypes.oneOf(['PT', 'PTA']),
    region: PropTypes.oneOf([
      'Central',
      'East Central',
      'Eastern',
      'North Central',
      'Northern',
      'Southern',
      'Western'
    ])
  })),
  onListItemClick: PropTypes.func
};

export default ProgramList;

export const ProgramDetailsFragment = graphql `
  fragment ProgramDetails on PtProgramsJson {
    name
    address {
      string
      lat
      lng
    }
    region
    programType
  }
`;
