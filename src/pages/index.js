import React, { Component } from 'react';
import ProgramList from '../components/ProgramList/ProgramList';
import Map from '../components/Map/Map';
import InfoBox from '../components/InfoBox/InfoBox';

import './styles.css';

class IndexPage extends Component {
  state = {
    activeProgram: {},
  };

  handleListItemClick = highlightedProgram => {
    this.setState({ activeProgram: highlightedProgram });
  }

  programs = () => (
    this.props.data.allPtProgramsJson.edges.map(
      edge => edge.node
    )
  );

  render() {
    const programs = this.programs();
    const markers = programs.map(program => ({
      ...program.address,
      programType: program.programType,
      active: program.name === this.state.activeProgram.name
    }));

    return (
      <main>
        <section className="IndexPage">
          <ProgramList
            programs={programs}
            onListItemClick={this.handleListItemClick}
          />
          <Map markers={markers}>
            <InfoBox program={this.state.activeProgram} />
          </Map>
        </section>
      </main>
    );
  }
};

export default IndexPage;

export const query = graphql`
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
