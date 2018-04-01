import React from 'react';
import ViewPlayerPage from './ViewPlayerPage';

const ViewHockeyPlayerPage = (props) => {
    return (
        <ViewPlayerPage sport="Hockey" playerid={props.match.params.playerid} />
    );
};

export default ViewHockeyPlayerPage;