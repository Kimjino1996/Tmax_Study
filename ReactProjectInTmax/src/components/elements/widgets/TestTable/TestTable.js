import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import TestTableList from './TestTableList'

export default function TestTable() {

    const [testDatas,setTestDatas]=useState([]);
    let process = require('../../../../db/myprocess.json')
    
    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTestDatas(data);
            console.log(data);
        })
        //.catch(error => console.log(error))
    },[]);
    
    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Your Test items</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>QTY</th>
                                        <th>Unit Price</th>
                                        <th>Add To Cart</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    testDatas.map(item=>(
                                        <TestTableList
                                        data={item}
                                        setTestDatas={setTestDatas}
                                        />
                                    )).slice(0,15)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shiping-update-wrapper">
                            <div className="cart-shiping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                 <button>Clear Wishlist</button> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}