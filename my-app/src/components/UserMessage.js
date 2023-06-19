import React from 'react'

function UserMessage(props) {
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
                </>
                ) : (<p>Please sign in</p>)
            }
        </>
    )
}

export default UserMessage
