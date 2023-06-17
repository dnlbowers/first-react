import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // initial state.
            introduction : "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter"
        }, () => {
            // use call back function to await asynconous actions (same as fetch().then())
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        //here will log the original values of the this.state because setState() is asynchronous
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }
    render() {
        return (
            <>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </>
        )
    }
}

export default StatefulGreetingWithCallback;