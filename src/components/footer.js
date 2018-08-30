import React from 'react'

import instaicon from './instagram-social-icon.png'
import soundcloudicon from './soundcloud-icon.png'
import twitchicon from './twitch-icon.png'
import yticon from './youtube-icon.png'
import twittericon from './twitter-social-icon.png'
import '../style-components/footer.css'

export default () => {
  return (
    <div className="structural">
      <div 
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            paddingTop: 0,
            justifyContent: 'space-around',
            }}
         >
          <a href="http://www.instagram.com/monsie_ur" style={{flexGrow: 1}}>
            <div style={{
              backgroundColor:'blue',
              //borderRadius: '0px 30px 0px 0px',
              maxHeight: '32px',
              }}>

              <img border="0" alt="Instagram" src={instaicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
            </div>
          </a>

          <a href="http://www.twitter.com/monsie_ur" style={{flexGrow: 1}}>
            <div style={{
              backgroundColor:'cyan',
              //borderRadius: '0px 30px 0px 0px',
              maxHeight: '32px',
              }}>
              
              <img border="0" alt="Twitter" src={twittericon} width="32" height="32" style={{verticalAlign:'middle', position:'center'}}/>
            </div>  
          </a>
          
          <a href="http://www.youtube.com/2toto78" style={{flexGrow: 1}}>
          <div style={{
            backgroundColor:'red',
            //borderRadius: '0px 30px 0px 0px',
            maxHeight: '32px',
          }}>
 
            <img border="0" alt="Youtube" src={yticon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </div>
          </a>

          <a href="http://www.twitch.com/Monsieur_" style={{flexGrow: 1}}>
          <div style={{
            backgroundColor:'purple',
            //borderRadius: '0px 30px 0px 0px',
            minWidth: '30%',
            maxHeight: '32px',
            }}>

            <img border="0" alt="Youtube" src={twitchicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </div>
          </a>
          
          <a href="http://www.soundcloud.com/mon_sieur" style={{flexGrow: 1}}>
          <div style={{
            backgroundColor:'orange',
            //borderRadius: '0px 30px 0px 0px',
            minWidth: '30%',
            maxHeight: '32px',
          }}>

            <img border="0" alt="Youtube" src={soundcloudicon} width="32" height="32" style={{verticalAlign:'middle'}}/>
          </div>
          </a>

      </div>
      </div>
      
  )
}
