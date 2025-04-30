import './css/TwitterFollowCard.css'

export function TwitterFollowCard({formatUserName, userName, name, isFollowing}) {
    return(
  
      <article className='tw-followCard'>
      <heade className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt="avatar" 
        src={`https://unavatar.io/${name}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </heade>
  
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  
    );
  }
  