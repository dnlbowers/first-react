// created using rfce snippet
import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the Funtional button")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me - Functional Component</button>
        </div>
    )
}

export default EventsFunctional
