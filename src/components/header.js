import React from 'react'
import Link from 'gatsby-link'

import instaicon from './instagram-social-icon.png'
import soundcloudicon from './soundcloud-icon.png'
import twitchicon from './twitch-icon.png'
import yticon from './youtube-icon.png'
import twittericon from './twitter-social-icon.png'

const Header = ({ siteTitle }) => (

    <div class="color-banner"
      style={{
        background: 'lightpink',
        marginBottom: '1.45rem',
        //maxHeight: 40,
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0.3rem 1.0875rem',
        }}
      >
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            paddingTop: 0,
            }}
         >
          <h1 style={{ margin: 0, lineHeight: '32px', marginRight: '100px'}}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
            </h1>
          </div>
      </div>
</div>
)

export default Header
