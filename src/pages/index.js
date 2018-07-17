import React, { Component } from 'react';
import ProgramList from '../components/ProgramList/ProgramList';
import Map from '../components/Map/Map';
import './styles.css';

class IndexPage extends Component {
  state = {
    activeMarker: undefined,
  };

  handleListItemClick = highlightedMarker => {
    this.setState({ activeMarker: highlightedMarker });
  }

  render() {
    const programs = this.props.data.allPtProgramsJson.edges.map(
      edge => edge.node
    );
    const markers = programs.map(program => ({
      ...program.address,
      programType: program.programType,
      active: program.name === this.state.activeMarker,
    }));

    return (
      <main>
        <section className="IndexPage">
          <ProgramList
            programs={programs}
            onListItemClick={this.handleListItemClick}
          />
          <Map markers={markers} />
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
