import React from 'react';
import '../../css/Header.css';
import {Link} from 'react-router-dom';

function Header(props) {

  const {
    currentHeaderLink,
    setHeaderLink,
    headerLinks
  } = props

  return (
    <>
      <div className="header-container">
        <span>KINGS MEAL APP</span>
        <div className="header-links">
          {headerLinks.map((link) => (
            <Link key={link.name} to={link.url} className={`header-link ${currentHeaderLink.name === link.name && `header-active`}`} onClick={() => {setHeaderLink(link)}}>{link.name}</Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header;