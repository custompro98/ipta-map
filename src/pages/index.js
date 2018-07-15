import React from 'react';
import ProgramList from '../components/ProgramList/ProgramList';

const IndexPage = ({ data }) => {
  const programs = data.allPtProgramsJson.edges.map(edge => edge.node);

  return (
    <main>
      <section>
        <ProgramList programs={programs} />
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
