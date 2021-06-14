import React, {useState} from 'react';
import FooterLogo from '../../elements/ui/FooterLogo'
import FooterMenu from '../../elements/ui/FooterMenu'
import FooterMenuData from '../../../db/footermenu.json'

export default function Blog(){
//    const [newBlog,setBlog]=useState(BlogData);
//    console.log(BlogData[0])
    // id. image,category,title,url,author,authorUrl
    //const blogList=newBlog.
    const [newFooterMenu,setNewFooterMenu]=useState(FooterMenuData);
    return(
        <>
        <footer>
            <div className="container-fluid">
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <FooterLogo/>
                            <FooterMenu footerMenuList = {newFooterMenu['ABOUT US']}
                             ft = "ABOUT US"
                             />
                            <FooterMenu footerMenuList = {newFooterMenu['FOLLOW US']}
                             ft = "FOLLOW US"
                             />
                            <FooterMenu footerMenuList = {newFooterMenu['USEFUL LINKS']}
                             ft = "USEFUL LINKS"
                             />
                            <div className="col-12 col-md-4">
                                <p className="menuTitle">About Us</p>
                                <p>jifojqiodfjioqjfoipjqfodjqopfdjoqjfo</p>
                                <input type="Text"/>
                                <p>button</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
}