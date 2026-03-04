import TwitterFollowCard from "./TwitterFollowCard"
import React from "react"
function App(){
    return (
        <React.Fragment>
            <TwitterFollowCard nombre = 'Juanito juanolo' avatar='myAvatar' />
            <TwitterFollowCard nombre = 'Antonio toni' avatar='myAvatar3' />
            <TwitterFollowCard nombre = 'Manolo manuel' avatar='myAvatar2' />
        </React.Fragment>
        
    )
}
export default App