import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <>
            {
                props.isLoggedIn ? (
                <>
                    <p>Welcome to the site! Please complete the steps below:</p>
                    <ol>
                        <li>Confirm your Email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                    <button onClick={props.toggleIsLoggedIn}>Sign Out</button>
                </>
                ) : (
                        <>
                            <p>Please sign in</p>
                            <button onClick={props.toggleIsLoggedIn}>Sign In</button>
                        </>
                )
            }
        </>
    )
}

export default MethodsAsPropsChild
