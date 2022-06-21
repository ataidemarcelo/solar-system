import React, { Component } from 'react';

import Title from '../Title';

import './style.css';

class Missions extends Component {
  render() {
    return (
      <div className="MissionContainer" data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
