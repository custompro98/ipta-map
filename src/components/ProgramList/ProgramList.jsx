import React, { Fragment } from 'react';
import Bucket from './Bucket/Bucket';
import './styles.css';

const ProgramList = ({ programs }) => {
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
          <Bucket title={region} subItems={programsByRegion[region]} />
        </li>
      ))}
    </ul>
  );
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
`
