import React from 'react'

function ConditionalRenderingFunctional(props) {
    return (
        <>
            <h1>{props.connected ? 'Connected' : 'Not connected'}</h1>
        </>
    )
}

export default ConditionalRenderingFunctional
