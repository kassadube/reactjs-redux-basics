import React from "react";
import {connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';
import { setName}  from "../actions/userActions"

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
            dispatch(setName(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);