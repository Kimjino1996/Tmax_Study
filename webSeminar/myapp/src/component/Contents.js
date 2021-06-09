import { Component,useState } from 'react';


export default function Contents(props){
    
    let [testText,setTestText]=useState(["https://github.com/DooooH?tab=stars","react"]);
    // int test[2]=["https://github.com/DooooH?tab=stars","react"])
    const handleClick=(event)=>{
        setTestText(["https://github.com/DopplerHQ/awesome-interview-questions#docker"]);
    //int test[1]= ["https://github.com/DopplerHQ/awesome-interview-questions#docker"]   
    }
    return(
    <article>
        <p>세번째 컴포넌트입니다.{testText[0]}</p>
        <a href={testText[0]}>hi {props.name}</a>
        <button onClick={handleClick}>nono</button>
    </article>
    );
    }
  
  