import Footer from '../../pages/footer/Footer';
import Header from '../../layout/Header';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Shop from "../../elements/widgets/productlist/Shop"
import React,{useEffect,useState} from 'react';
export default function ProductList(){
    const [categoryName,setCategoryName]=useState("");
    return(<>
    <Header></Header>
    
    <div className="shop-area pt-95 pb-100">
        <div className="container">
            <div className="row">
            <SideBar setCategoryName={setCategoryName}/>
            <Shop categoryName={categoryName}/>
            </div>
        </div>
    </div>
    <Footer></Footer></>
    );
}