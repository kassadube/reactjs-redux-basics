import React from "react";
import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from './container/App';



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

const store = createStore(combineReducers({ mathReducer, userReducer }),
    {},
    applyMiddleware(myLogger, logger()));

store.subscribe(() => {
    // console.log("store updated", store.getState());
})


render(
<Provider store={store}>
    <App />
</Provider>
, window.document.getElementById('app'));
