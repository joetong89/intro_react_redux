import React from 'react';

class ViewPlayerPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            curPlayer: {}
        }
    }

    componentDidMount() {

        try {
            const playerJSON = localStorage.getItem(this.props.sport+'players');
            const players = JSON.parse(playerJSON);

            let playerPresent = false;
            let curPlayer = {};
            players.forEach((player) => {
                if (player.name == this.props.playerid) {
                    playerPresent = true;
                    curPlayer = player;
                }
            });

            this.setState(() => ({ curPlayer }));

        } catch (e) {
            // No action required.
        }
    }
  
    render() {
        return (
            <div className="container">
                <h1>{(this.state.curPlayer.name) ? this.state.curPlayer.name : "Player not found." }</h1>
                {this.state.curPlayer.gender && <p>{this.state.curPlayer.gender}</p>}
                {this.state.curPlayer.message && <p>{this.state.curPlayer.message}</p>}
            </div>
        );
    }
};

export default ViewPlayerPage;