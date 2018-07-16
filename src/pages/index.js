import React from 'react';
import ProgramList from '../components/ProgramList/ProgramList';
import Map from '../components/Map/Map';
import './styles.css';

const IndexPage = ({ data }) => {
  const programs = data.allPtProgramsJson.edges.map(edge => edge.node);
  const markers = programs.map(program => (
    { ...program.address, programType: program.programType }
  ));

  return (
    <main>
      <section className="IndexPage">
        <ProgramList programs={programs} />
        <Map markers={markers} />
      </section>
    </main>
  );
};

export default IndexPage;

export const query = graphql `
  query IndexQuery {
    allPtProgramsJson(sort: { fields: [region, name] }) {
      edges {
        node {
          ...ProgramDetails
        }
      }
    }
  }
`;
