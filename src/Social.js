import React from 'react'
import SocialBar from './SocialBar'
import './Social.css'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
const Social = () => {
  return (
    <div className='Social'>
    <h1>My resume is here</h1>

    <div className='resume'>
    <a rel="noopener noreferrer" target='_blank' href='https://www.canva.com/design/DAEHtQ6TbyA/7N5Utpi4Z0AEL17jRBBy4g/view?utm_content=DAEHtQ6TbyA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'><WorkOutlineIcon fontSize='large'/></a><a rel="noopener noreferrer" target='_blank' href='https://www.canva.com/design/DAEHtQ6TbyA/7N5Utpi4Z0AEL17jRBBy4g/view?utm_content=DAEHtQ6TbyA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>Brent's Resume</a>
    </div>
    <h1>You can also find me on these platforms!</h1>
      <SocialBar username="@BrentCarey14"  name='twitter' link='https://twitter.com/BrentCarey14'/>
      <SocialBar username="@brentcareycode"  name='github' link='https://github.com/brentcareycode'/>
      <SocialBar username='Brent Carey' name='linkedin' link='https://www.linkedin.com/in/brent-carey-0aab6b1b4/'/>
      <SocialBar username='@brentcarey1' name='medium' link='https://medium.com/@brentcarey1'/>

    </div>
  )
}

export default Social