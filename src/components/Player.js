import React from 'react';

class Player extends React.Component {
    constructor(props) {

        // bind the required methods to this
        super(props);
        this.deletePlayer = this.deletePlayer.bind(this);
        this.showPlayerModal = this.showPlayerModal.bind(this);
    }

    // deletePlayer: used to pass up the player to delete into the handleDeletePlayer() method
    deletePlayer() {

        // delete the player via the handler method
        this.props.handleDeletePlayer(this.props.player);
    }

    showPlayerModal() {

        // delete the player via the handler method
        this.props.handleShowPlayer(this.props.player);
    }

    render() {
        return (
            <div className="player">
                <div className="player-info">
                    <p onClick={this.showPlayerModal}>{this.props.player.name} ({this.props.player.gender})</p>

                    <button 
                        onClick={this.deletePlayer}
                        className="button button-clear"
                    >
                        Remove
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Player;