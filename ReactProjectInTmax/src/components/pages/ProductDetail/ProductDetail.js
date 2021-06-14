import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function ProductDetail() {

    const { id } = useParams();
    const [ productData , setProductData ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
            console.log(data);
        });
    },[id]);

    console.log(productData);

    return (
        <Fragment>
            <Header/>
            
            <Footer />
        </Fragment>
    );
}