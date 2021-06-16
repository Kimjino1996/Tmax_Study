import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function AddBuyAndCart({data,color,size}){
    let process=require('../../../../db/myprocess.json');

    const handlePutCompareList=(id)=>{

    fetch(`http://${process.IP}:${process.PORT}/compare/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    discount: data.discount,
                    shortDescription:data.shortDescription,
                    rating:data.rating
                }),
            }).then(
            alert("success")
        )
    }
    const handlePutWishList=(id)=>{

        fetch(`http://${process.IP}:${process.PORT}/wish/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    discount: data.discount
                }),
            }).then(
                alert("success")
            )
    }
    const [count,setCount]=useState(1);
    
    const handlePutCartList=()=>{

        fetch(`http://${process.IP}:${process.PORT}/cart/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    discount: data.discount,
                    qty:count,
                    color:color,
                    size: size
                }),
            }).then(
                alert("success")
            )
    }
    const handleCountAdd=()=>{
        setCount(count+1);
    }
    const handleCountMinus=()=>{
        count >1 ? setCount(count-1):alert("못합니다.");
    }
    return(
        <>
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton" onClick={handleCountMinus}>-</button>
                <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                <button className="inc qtybutton" onClick={handleCountAdd}>+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button onClick={()=>handlePutCartList()}> Add To Cart </button>
            </div>

            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist">
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare" >
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>

        </>
    );
}