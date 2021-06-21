  
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function TestTableList({data,setTestDatas}) {

    const [count, setCount]=useState(data.qty);
    let process = require('../../../../db/myprocess.json')
    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count-1) : alert("최소 수량은 1개 입니다.")
    }

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/cart/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            fetch(`http://${process.IP}:${process.PORT}/cart`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setTestDatas(data);
                    console.log(data);
                })
                //.catch(error => console.log(error))
        )
    }

    return(
        <tr>
            <td className="product-thumbnail">
                <Link to={`/productdetail/${data.id}`}>{data.name}</Link>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={()=>handleCountDec()}>-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value={count} />
                    <button className="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
                </div>
            </td>
            <td className="product-price-cart">
                <span className="amount old">{(data.price * ((100+data.discount)/100)).toFixed(2)}</span>
                <span className="amount">{data.price}</span>
            </td>
            
            <td className="product-wishlist-cart"><Link to={`/productdetail/${data.id}`}>Select option</Link></td>
            <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        </tr>
                    
    );
}