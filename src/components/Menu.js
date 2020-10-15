import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const listMenu = ['Home', 'Gallery'];
  return (
    <div className="menu">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name.toLowerCase()}`} key={name.toLowerCase()}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
