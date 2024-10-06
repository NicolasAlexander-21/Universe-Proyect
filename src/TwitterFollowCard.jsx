import { useState } from "react" //esto es o son los huts

export function TwitterFollowCard({userName, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  // renderizado condicional 
  const text = isFollowing ? 'Siguiendo' : ' Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const imageSrc = `https://unavatar.io/${userName}`
  return (
    // <article style={{display:'flex', alignItems:'center', color:'#fff' }}>
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={imageSrc} alt="avatar_1" />
        <div>
          <strong className='tw-followCard-info'>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}