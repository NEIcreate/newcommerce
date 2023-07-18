import React from 'react'
import styles from './header.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <Header>
        <div>
            <nav>
                <ul>
                     <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : '' }>
                            Home
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/contact" >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>
    </Header>
  )
}

export default Header