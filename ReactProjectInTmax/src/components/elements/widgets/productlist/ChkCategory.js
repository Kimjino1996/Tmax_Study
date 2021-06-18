import React,{useState,useEffect} from "react";
export default function ChkCategory({item,setCategoryName}){
    const [chk,setchk]=useState(true)
    const handleChk=(item)=>{
        setchk(!chk)
        setCategoryName(item.name)
    }
    return (<>
            <li key= {item.id}>
            <div className="sidebar-widget-list-left">
                <button onClick={()=>handleChk(item)}><span className={chk? "checkmark":"mark"}></span>{item.name}</button>
            </div>
        </li>
    </>);

}