import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={ style.header }>
      <Link to='/'>
        <div className={ style.logo } />
      </Link>
      <nav className={ style.navigation }>
        <ul className={ style.navigationList }>
          <li className={ style.navigationItem }>
            <NavLink
              className={ style.link }
              activeClassName={ style.activeLink }
              exact
              to='/'
            >Home</NavLink>
          </li>
          <li className={ style.navigationItem }>
            <NavLink
              className={ style.link }
              activeClassName={ style.activeLink }
              to='/catalog'
            >Catalog</NavLink>
          </li>
          <li className={ style.navigationItem }>
            <NavLink
              className={ style.link }
              activeClassName={ style.activeLink }
              to='/about'
            >About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};