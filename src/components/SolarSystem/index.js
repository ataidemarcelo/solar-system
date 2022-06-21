import React, { Component } from 'react';
import Title from '../Title';

import './style.css';

class SolarSystem extends Component {
  render() {
    return (
      <div className="SolarSystemContainer" data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
