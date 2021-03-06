import React, { useState } from 'react';
import menuData from '../../../db/nav.json';

export default function Menu(){

    const menuList = menuData.menu.map(item => (
        <li className="nav-link" key={item.id}><a href={item.url}>{item.name}</a></li>
    ))
    
    return(
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {menuList}
        </ul>

    );
}