import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // initial state.
            introduction : "Hello!",
            buttonText: "Exit",
        };
        //bind this to the class object via the constructor
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttonText: "Enter"
    //     });
    //     console.log(this.state.introduction);
    // }
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter"
        });
        console.log(this.state.introduction);
    }
    render() {
        return (
            <>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                {/*<button onClick={() => this.handleClick()}>*/}
                {/* -- Instead of binding in the constructor it can be bound here when calling the click handler -- */}
                {/*<button onClick={this.handleClick.bind(this)}>*/}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </>
        )
    }
}

export default EventBinding;