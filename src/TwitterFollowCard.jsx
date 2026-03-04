import './TwitterFollowCard.css'

function TwitterFollowCard({userName, name , avatar}){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`src/assets/${avatar}.png`}
                    alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>                
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>            
        </article>
    )
}
export default TwitterFollowCard