import React from 'react';
import Header from '../../layout/Header';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../../pages/deal/Deal';
import Blog from '../../pages/blog/Blog';
import Footer from '../../pages/footer/Footer';
import Banner from '../../elements/ui/Banner';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Bread from '../../elements/ui/Bread';
import { data } from 'browserslist';
import ProductTop from '../../elements/widgets/product/productTop';

export default function ProductDetail(){
    const {Id}=useParams();
    //alert(Id);
    const [paramData,setParamData]=useState([]);
    let process = require('../../../db/myprocess.json');
    
    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/${Id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setParamData(data);
            console.log(data);
        })
        //.catch(error => console.log(error))
    },[Id]);
return (
    <>
            <Header/>
            <Bread
                productId = {paramData.id}
                productName = {paramData.name}
                productUrl = {`/productdetail/${paramData.id}`}
            />
            <ProductTop
                productData={paramData}
            />
            <Footer/>
    </>

);

}