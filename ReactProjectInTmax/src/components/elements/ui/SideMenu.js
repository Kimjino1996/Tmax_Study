import menuData from '../../../db/nav.json';
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function SideMenu(){
    const [sidemenu, setSideMenu] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3005/sidemenu").then
        (res=>{return res.json();
        }).then(data=>{
            setSideMenu(data);
        })
    },[]);
    const menuList = sidemenu.map(item => (
        <div className='same-style'>
            <Link to={item.url} className="nav-link px-2"><i className={item.name}></i><span className="count-style">{item.count}</span></Link>
        </div>
    ));

    return(
        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
        <div className="header-right-wrap ">
            <div className="same-style header-search d-none d-lg-block">
                <button className="search-active"><i className="las la-search"></i></button>
            </div>
            
            <div className="same-style account-setting d-none d-lg-block">
                <button className="account-setting-active"><i className="las la-user-circle"></i></button>
            </div>

            <div className="same-style header-compare">
                <a href="/compare"><i className="las la-random"></i><span className="count-style">1</span></a>
            </div>

            <div className="same-style header-wishlist">
                <a href="/wishlist"><i className="las la-bookmark"></i><span className="count-style">2</span></a>
            </div>

            <div className="same-style cart-wrap d-none d-lg-block">
                <button className="icon-cart"><i className="las la-shopping-bag"></i><span className="count-style">0</span></button>
            </div>
            <div className="same-style cart-wrap d-block d-lg-none">
                <a className="icon-cart" href="/cart"><i className="las la-shopping-bag"></i><span className="count-style">0</span></a>
            </div>
            <div className="same-style mobile-off-canvas d-block d-lg-none">
                <button className="mobile-aside-button"><i className="las la-bars"></i></button>
            </div>
        </div>
    </div>

    );
}