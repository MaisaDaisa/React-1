import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MenuBar.css";

export default function MenuBar() {
    const handleClick = () => { 
        console.log('Hello')
     }
  return (
    <div className="header-menu" onClick={ handleClick }>
		<FontAwesomeIcon icon={faBars} />
	</div>
  )
}
