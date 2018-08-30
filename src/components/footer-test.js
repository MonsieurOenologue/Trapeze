import React from 'react'

import instaicon from './instagram-social-icon.png'
import soundcloudicon from './soundcloud-icon.png'
import twitchicon from './twitch-icon.png'
import yticon from './youtube-icon.png'
import twittericon from './twitter-social-icon.png'
import '../style-components/footer.css'

export default () => {
  return (
    <div
    style={{
      background: 'pink',
      marginBottom: '1.45rem',
      maxHeight: 64,
      width: '100%',
    }}
    >
    <div className="structural">
      <div 
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            paddingTop: 0,
            justifyContent: 'center',
            alignItems: 'center', 
            }}
         >
          <a href="http://www.instagram.com/monsie_ur" className='instagram'>
              <img border="0" alt="Instagram" src={instaicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </a>

          <a href="http://www.twitter.com/monsie_ur" className='twitter'>
              <img border="0" alt="Twitter" src={twittericon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </a>
          
          <a href="http://www.youtube.com/2toto78" className='youtube'>
            <img border="0" alt="Youtube" src={yticon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </a>

          <a href="http://www.twitch.com/Monsieur_" className='twitch'>
            <img border="0" alt="Youtube" src={twitchicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </a>
          
          <a href="http://www.soundcloud.com/mon_sieur" className='soundcloud'>
            <img border="0" alt="Youtube" src={soundcloudicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </a>

      </div>
      </div>
      </div>
  )
}
