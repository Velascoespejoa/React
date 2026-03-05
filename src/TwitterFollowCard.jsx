import { useState } from 'react'
import './TwitterFollowCard.css'

function TwitterFollowCard({userName='Unknown', children , avatar,inicialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

    const text = isFollowing ? 'siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`src/assets/${avatar}.png`}
                    alt="Avatar" />
                <div className='tw-followCard-info'>
                    {children}                    
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>                
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </aside>            
        </article>
    )
}
export default TwitterFollowCard