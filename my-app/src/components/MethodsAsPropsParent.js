import React, {Component} from 'react'
import MethodAsPropsChild from "./MethodAsPropsChild";

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true ? false : true
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }

    //single method for toggling log in/out
    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    }

    render() {
        return (
            <>
                <MethodAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    // handleSignIn={this.handleSignIn}
                    // handleSignOut={this.handleSignOut}
                    toggleIsLoggedIn={this.toggleIsLoggedIn}
                />
            </>
        )
    }
}

export default MethodsAsPropsParent
