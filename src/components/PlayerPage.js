import React from 'react';

const PlayerPage = (props) => {
    return (
        <div>
            <h1>Player Page</h1>
            <p>The ID of the player we're looking for is {props.match.params.playerid}</p>
        </div>
    );
}

export default PlayerPage;