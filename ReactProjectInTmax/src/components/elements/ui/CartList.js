import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
export default function CartList(data){
    
    return(
        <>
         <tr>
                                    <td className="product-thumbnail">
                                    <Link to={`/productdetail/${data.id}`}><img className="img-fluid" src= {data.image} alt=""/></Link>
                                    </td>
                                    <td className="product-name">
                                    <Link to={`/productdetail/${data.id}`}>Lorem ipsum coat</Link>
                                        <div className="cart-item-variation">
                                            <span>Color: blue</span>
                                            <span>Size: x</span>
                                        </div>
                                    </td>
                                    <td className="product-price-cart">
                                        <span className="amount old">{data.price}</span>
                                        <span className="amount">{data.price}</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="cart-plus-minus">
                                            <button className="dec qtybutton">-</button>
                                            <input className="cart-plus-minus-box" type="text" readonly="" value="1"/>
                                            <button className="inc qtybutton">+</button>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">{data.price}</td>
                                    <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
            </tr>
        </>
    );
}