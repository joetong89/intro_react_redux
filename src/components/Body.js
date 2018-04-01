import React from 'react';
import { Link } from 'react-router-dom';

import PlayersList from './PlayersList';

const Body = (props) => {
    return (
        <div className="container">
            <Link to="/about">About Us</Link>
            <PlayersList
                players={props.players}
                handleShowPlayer={props.handleShowPlayer}
                handleAddPlayer={props.handleAddPlayer}
                handleDeletePlayers={props.handleDeletePlayers}
                handleDeletePlayer={props.handleDeletePlayer}
                sport={props.sport}
            />
        </div>
    );
}

export default Body;