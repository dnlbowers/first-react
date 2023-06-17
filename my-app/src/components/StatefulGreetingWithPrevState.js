import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // initial state.
            introduction : "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Enter" ? "Exit" : "Enter",
    //     }, () => {
    //         // use call back function to await asynconous actions (same as fetch().then())
    //         console.log('new state', this.state.introduction);
    //         console.log('new state', this.state.buttonText);
    //     });
    //     //here will log the original values of the this.state because setState() is asynchronous
    //     // console.log(this.state.introduction);
    //     // console.log(this.state.buttonText);
    // }

    //Alt way to do handle click when you need to update state based on previous state
    handleClick() {
        this.setState((prevState, prevProps) =>{
            console.log('Prev state: ', prevState)
            console.log('Prev Props: ', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            console.log('Prev state: ', prevState)
            console.log('Prev Props: ', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    //my solution had no issue
    // incrementCount() {
    //     this.setState({
    //         count: this.state.count += 1,
    //     }, () => {
    //         console.log(this.state.count)
    //     })
    // }
    incrementCountFive() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    render() {
        return (
            <>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>Increase Count by 1</button>
                <button onClick={() => this.incrementCountFive()}>Increase Count by 5</button>
                <p>You've clicked {this.state.count} times </p>
            </>
        )
    }
}

export default StatefulGreetingWithPrevState;