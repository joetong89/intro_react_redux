console.log("Write your redux code in /src/redux/redux-freeagenttracker.js");

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const freeAgentDefaultState = [];

const freeAgentReducer = (state = freeAgentDefaultState, action) => {

		switch(action.type) {
			case "ADD_PLAYER":
				return state.concat(action.player);
			case "REMOVE_PLAYER":
				return state.filter((player) => {
					return action.id !== player.id;
				});
			case "EDIT_PLAYER":
				return state.map((player) => {
					if (action.id === player.id) {
						return {
							...player,
							...action.playerInfo,
						}
					} else {
						return player;
					}
				});
			default:
				return state;
		}
};



const filterDefaultState = {
	text: '',
	sort_by: 'name',
	skill_level: 'all'
};

const filtersReducer = (state = filterDefaultState, action) => {
	switch(action.type) {
		case "SET_FILTER_TEXT":
			return {
				...state,
				text: action.text,
			}
		case "SET_SKILL_LEVEL":
			return {
				...state,
				skill_level:action.skill_level,
			}
		case "SORT_BY_NAME":
			return {
				...state,
				sort_by: 'name',
			}
		case "SORT_BY_SKILL_LEVEL":
			return {
				...state,
				sort_by: 'skill_level',
			}
		default:
			return state;
	}
};

const numReducer = (state = { curNumber: 0 }, action) => {

  switch(action.type) {

    case "ADD_ONE":
      return {
        curNumber: state.curNumber + 1
      }

    case "ADD":
        return {
          curNumber: state.curNumber + action.amount
        }

    default:
      return state;

  }
};

const store = createStore(combineReducers({
	players: freeAgentReducer,
	filters: filtersReducer,
	numbers: numReducer,
}));

const addOne = () => {
	return {
		type: "ADD_ONE",
	}
};

const add = ({number} = {number: 0}) => {
	return {
		type: "ADD",
		amount: number,
	}
};

const addPlayer = ({id = uuid(), name, message = '', skill_level = 'basic', type = 'hockey', gender = 'Male'} = {}) => {
	return {
		type: 'ADD_PLAYER',
		player: {
			id,
			name,
			message,
			skill_level,
			type,
			gender,
		}
		
	}
};

const editPlayer = (id, playerInfo) => {
	return {
		type: 'EDIT_PLAYER',
		id,
		playerInfo,
	}
};

const removePlayer = (id) => {
	return {
		type: "REMOVE_PLAYER",
		id,
	}
};

const setFilterText = (text) => {
	return {
		type: 'SET_FILTER_TEXT',
		text,
	}
};

const setSkillLevel = (skill_level) => {
	return {
		type: "SET_SKILL_LEVEL",
		skill_level,
	}
};

const sortByName = () => {
	return {
		type: "SORT_BY_NAME",
	}
};

const sortBySkillLevel = () => {
	return {
		type: "SORT_BY_SKILL_LEVEL",
	}
};

const getVisiblePlayers = (players, { text, sport_type, skill_level, sort_by }) => {
	return players.filter((player) => {
		// match the text search
		const textNameMatch = player.name.toLowerCase().includes(text.toLowerCase());
		const textMessageMatch = player.message.toLowerCase().includes(text.toLowerCase());

		// match the skill level
		let skillMatch = false;
		if (skill_level == 'all' || skill_level == player.skill_level) {
			skillMatch = true;
		}

		return (textNameMatch || textMessageMatch) && skillMatch;
	}).sort((a, b) => {
		if (sort_by === 'name') {
			return a.name > b.name ? 1 : -1;
		} else if (sort_by === 'skill_level') {
			return a.skill_level > b.skill_level ? 1 : -1;
		}
	});
};


const theSubscribtion = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addOne());
store.dispatch(add({number: 7}));
store.dispatch(add());
store.dispatch(addPlayer({name: "Rob Mylers"}));
store.dispatch(addPlayer({id:"1234", name: "Rob Mylers", skill_level: "expert"}));
store.dispatch(addPlayer({name: "Rob Mylers", skill_level: "intermediate"}));
//store.dispatch(editPlayer("1234", {name:"ROBBBB"}));
//store.dispatch(removePlayer("1234"));



console.log("default filters:");
let state = store.getState();
console.log(getVisiblePlayers(state.players, state.filters));

console.log("Setting filters:")
store.dispatch(setFilterText("Rob"));
state = store.getState();
console.log(getVisiblePlayers(state.players, state.filters));
store.dispatch(setFilterText(""));

store.dispatch(setSkillLevel("intermediate"));
state = store.getState();
console.log(getVisiblePlayers(state.players, state.filters));

store.dispatch(setSkillLevel("all"));
store.dispatch(sortBySkillLevel());
state = store.getState();
console.log(getVisiblePlayers(state.players, state.filters));

store.dispatch(sortByName());
state = store.getState();
console.log(getVisiblePlayers(state.players, state.filters));



theSubscribtion(); //unsubscribe

store.dispatch({
	type: "ADD",
	amount: 4
});
