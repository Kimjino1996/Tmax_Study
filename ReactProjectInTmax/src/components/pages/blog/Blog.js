import Title from '../../elements/ui/Title';
import React, {useState} from 'react';
import Bloglist from '../../elements/widgets/blogList/Bloglist'

export default function Blog(){
//    const [newBlog,setBlog]=useState(BlogData);
//    console.log(BlogData[0])
    // id. image,category,title,url,author,authorUrl
    //const blogList=newBlog.
    return(
        <>
        <section id="blog">
            <div className="container">
                <Title name="Today's Blog"></Title>
                <Bloglist/>
            </div>
        
        </section>

        </>
    );
}