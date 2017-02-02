/*import React from "react";
import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));*/
import { createStore, combineReducers, applyMiddleware } from "redux"

const initialMathState = {
    result: 1,
    lastValues: []
}

const mathReducer = (state = initialMathState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
}

const initialUserState = {
    name: "moshe",
    age: 99
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}


const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
}

const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("store updated", store.getState());
})

store.dispatch({
    type: "ADD",
    payload: 10,
});

store.dispatch({
    type: "ADD",
    payload: 15,
});

store.dispatch({
    type: "SUBTRACT",
    payload: 10,
});

store.dispatch({
    type: "SUBTRACT",
    payload: 3,
});

store.dispatch({
    type: "SET_NAME",
    payload: "MOKL",
});


