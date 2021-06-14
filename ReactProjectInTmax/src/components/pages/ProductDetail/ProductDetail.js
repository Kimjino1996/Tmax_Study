import React from 'react';
import Header from '../../layout/Header';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../../pages/deal/Deal';
import Blog from '../../pages/blog/Blog';
import Footer from '../../pages/footer/Footer';
import Banner from '../../elements/ui/Banner';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function ProductDetail(){
    const {Id}=useParams();
    //alert(Id);
    const [paramData,setParamData]=useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3005/product/${Id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setParamData(data);
        })
        //.catch(error => console.log(error))
    },[Id]);
return (
    <>
            <Header/>
            <span>{Id}</span>
            <Footer/>
    </>

);

}