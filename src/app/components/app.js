import React from "react";
import {connect } from "react-redux";

import { User } from './User';
import { Main } from './Main';

export class App extends React.Component {
   

    changeUsername(newName) {
        this.props.setName("Anna");
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);