import React from 'react';
import ViewPlayerPage from './ViewPlayerPage';

const ViewBaseballPlayerPage = (props) => {
    return (
        <ViewPlayerPage sport="Baseball" playerid={props.match.params.playerid} />
    );
};

export default ViewBaseballPlayerPage;