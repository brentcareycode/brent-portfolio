import React from 'react'
import './SocialBar.css'
import { SocialIcon } from 'react-social-icons';
const SocialBar = (props) => {
  return (
    <div className={ `Social-Bar ${props.name}`}>
      <SocialIcon  url={props.link}/>
      <a href={props.link}>{props.username}</a>
    </div>
  )
}
export default SocialBar