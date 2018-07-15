import React, { Fragment } from 'react';

const ProgramList = ({ programs }) => (
  <ul className="ProgramList">
    {programs.map(program => (
      <li key={program.name} className="ProgramList__Program">
        <span>Name: {program.name}</span>
      </li>
    ))}
  </ul>
);

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
