import React, {Component} from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            isLoggedIn: true
        }
    }


    render() {
        return (
            <>
                <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
                {this.state.isLoggedIn ? (
                    <>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your Email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </>
                ) : (<p>Please sign in</p>) }
            </>
        )
    }
}

export default ConditionalRenderingClass
