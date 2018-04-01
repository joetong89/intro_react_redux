import React from 'react';

import Player from './Player';
import NewFreeAgentForm from './NewFreeAgentForm';

const PlayersList = (props) => {
    return (
        <div>
            <h1>{props.sport} Players</h1>
            <div className="list-removeall">
                {props.players.length <= 0 && <h3>No free agents, everybody is playing!</h3>}
                {props.players.length > 0 && <h3>Delete all Players?</h3>}
                {props.players.length > 0 && <button className="button button-clear" onClick={props.handleDeletePlayers}>Remove All Players</button>}
            </div>
            <div className="player-list">
                    {
                    props.players.map((player) => <Player key={player.name} player={player} handleShowPlayer={props.handleShowPlayer} handleDeletePlayer={props.handleDeletePlayer} />)
                    }
                
                <NewFreeAgentForm handleAddPlayer={props.handleAddPlayer} />
            </div>
        </div>
    );
}

export default PlayersList;