// created using RCE template
import React, {Component} from 'react'

export class EventsClass extends Component {

    clickHandler() {
        console.log("Clicked the Class button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me - Class Component</button>
            </div>
        )
    }
}

export default EventsClass
