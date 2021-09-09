import './menu.scss'
import React from 'react'
import {
    Link,
  } from 'react-router-dom';



export default function Menu() {
    return(
        <nav className="menu">
            <ul className="menu__menu-list">
                <li className="menu__menu-item"> <Link to="/">home</Link> </li>               
                <li className="menu__menu-item"> <Link to="/catchedPokemons">catched pokemons</Link></li>
            </ul>
        </nav>
    );
}
