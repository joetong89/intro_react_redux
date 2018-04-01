import React from 'react';
import Modal from 'react-modal';
import Body from './Body';

class FreeAgentTracker extends React.Component {
    constructor(props) {
        super(props);

        // bind the required methods to this
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleDeletePlayers = this.handleDeletePlayers.bind(this);
        this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
        this.handleShowPlayer = this.handleShowPlayer.bind(this);
        this.closeModal = this.closeModal.bind(this);

        // Set the initial state of the players here. Even though we're not directly
        // rendering it inside of this component, we will be performing almost all of
        // the functionality of it at this level.
        this.state = {
            players: [],
            curPlayer: {}
        };
    }

    // componentDidMount: we're going to use this to retrieve our players from local storage
    componentDidMount() {

        try {
            const playerJSON = localStorage.getItem(this.props.sport+'players');
            const players = JSON.parse(playerJSON);

            if (players) {
                this.setState(() => ({ players }));
            }
        } catch (e) {
            // No action required.
        }
    }

    // componentDidUpdate: we're going to use this to save our updated player state in local storage
    componentDidUpdate(prevProps, prevState) {

        if (prevState.players.length !== this.state.players.length) {

            const playerJSON = JSON.stringify(this.state.players);
            localStorage.setItem(this.props.sport+'players', playerJSON);
        }
    }

    // handleAddPlayer: Used to add a new player to the list of free agents
    handleAddPlayer(player) {

        if (!player.name) {
            return 'Please enter a valid player name.';
        }

        // update the state
        this.setState((prevState) => {
            return {
                players: prevState.players.concat(player)
            };
        });
    }

    // handleDeletePlayers: Used to clear all players from the list
    handleDeletePlayers() {

        // update the state
        this.setState((prevState) => {
            return {
                players: []
            };
        });
    }

    // handleDeletePlayer: Used to remove a specific player from the list
    handleDeletePlayer(player) {

        const newPlayerList = this.state.players.filter((thePlayer) => {
            if (thePlayer.name == player.name) {
                return false;
            }
            else {
                return true;
            }
        });

        // update the state
        this.setState((prevState) => {
            return {
                players: newPlayerList
            };
        });
    }

    handleShowPlayer(player) {
        this.setState((prevState) => {
            return {
                curPlayer: player,
                modalIsOpen: true
            }
        })
    }

    closeModal() {
        this.setState((prevState) => {
            return {
                modalIsOpen: false
            }
        })
    }
    
    render() {
        return (
            <div>
                <Body 
                    handleAddPlayer={this.handleAddPlayer}
                    handleShowPlayer={this.handleShowPlayer}
                    handleDeletePlayers={this.handleDeletePlayers}
                    handleDeletePlayer={this.handleDeletePlayer}
                    players={this.state.players}
                    sport={this.props.sport}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Show Player Modal"
                    className="modal"
                >
                    <h2>{this.state.curPlayer.name}</h2>
                    <h3>{this.state.curPlayer.gender}</h3>
                    <p>{this.state.curPlayer.message}</p>
                    <button className="button" onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default FreeAgentTracker;