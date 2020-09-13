import React from 'react'
import SocialBar from './SocialBar'
import './Social.css'
const Social = () => {
  return (
    <div className='Social'>
    <h1>You can find me on these platforms</h1>
      <SocialBar username="@BrentCarey14"  name='twitter' link='https://twitter.com/BrentCarey14'/>
      <SocialBar username="@brentcareycode"  name='github' link='https://github.com/brentcareycode'/>
      <SocialBar username='Brent Carey' name='linkedin' link='https://www.linkedin.com/in/brent-carey-0aab6b1b4/'/>
      <SocialBar username='@brentcarey1' name='medium' link='https://medium.com/@brentcarey1'/>
    </div>
  )
}

export default Social