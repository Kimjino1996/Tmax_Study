import React,{useState} from "react";

export default function FooterMenu({footerMenuList,ft}){
    console.log(footerMenuList);
    const [newList,setNewList]=useState(footerMenuList);
    const menuList=newList.map(item=>(
        <li key={item.id}>{item.name}</li>
    ))
    return(
        <div className="col-12 col-md-2">    
            <p className="menuTitle">{ft}</p>
            <ul>
            
                {menuList}
            </ul>
        </div>
    );
}
