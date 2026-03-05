import TwitterFollowCard from "./TwitterFollowCard"
import React from "react"
function App(){
    return (
        <>
            <TwitterFollowCard inicialIsFollowing userName='@Juaniju' avatar='myAvatar'>
                <strong>Antonio Velasco Espejo</strong>
            </TwitterFollowCard>
            <TwitterFollowCard inicialIsFollowing={false} userName='@antoto' avatar='myAvatar3'>
                <strong>Juanito juan juanlo</strong>
            </TwitterFollowCard>
            <TwitterFollowCard inicialIsFollowing avatar='myAvatar2'>
                <strong>rodolfo rolf adolf</strong>
            </TwitterFollowCard>
        </>        
    )
}
export default App