import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function BlogList(){
    const [newBlog,setBlog] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3005/blog").then
        (res=>{return res.json();
        }).then(data=>{
            setBlog(data);
        })
    },[]);

    const blogList=newBlog.map(item=>(
        <div className="col-12 col-md-4">
            <Link to={`"/blogdetail/${item.id}"`}><div className="blogImg" style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover"}}></div></Link>
                <div className="blogTxt"> 
                    <Link to={`"/blogdetail/${item.id}"`}><p className="blogTitle">{item.title}</p></Link>
                    <Link to={`"/authordetail/${item.author}"`}><p className="blogContent">by {item.author}</p></Link>
                </div>
        </div>
    )).slice(0,3)
    return(
        <>
        <div className="row mb-4">
            <div className="col-12 col-md-6 offset-md-3 mb-4 title"></div>
        </div>
        <div className="row mt-5">
        {blogList}           
                    
        </div>
        </>
    );
}