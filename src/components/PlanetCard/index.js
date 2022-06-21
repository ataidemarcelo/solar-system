import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="PlanetCard" data-testid="planet-card">
        <div className="ImageContainer">
          <img
            className="PlanetImage"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
        <p className="PlanetName" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
