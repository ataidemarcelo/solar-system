import React, { Component } from 'react';

import Title from '../Title';
import MissionCard from '../MissionCard';

import './style.css';

import missions from '../../data/missions';

class Missions extends Component {
  render() {
    return (
      <div className="MissionContainer" data-testid="missions">
        <Title headline="Missões" />
        <div className="MissionsCardContainer">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
