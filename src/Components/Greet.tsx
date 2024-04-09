import React from "react"


export const Greet = (props: {
    name: string;
    isLoggedIn: boolean
    lastLoggedInTime: string
}) => {

    return (
        <>
            {props.isLoggedIn ?
                (<h2> Hello {props.name} from Greet Components! <br></br>
                    Last LoggedIn time: {props.lastLoggedInTime}
                </h2>

                )
                :
                (<h2>Welcome Guest</h2>)}
        </>
    )
} 