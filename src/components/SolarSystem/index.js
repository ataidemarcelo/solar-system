import React, { Component } from 'react';

import Title from '../Title';
import PlanetCard from '../PlanetCard';

import './style.css';

import Planets from '../../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div className="SolarSystemContainer" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="PlanetsContainer">
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
