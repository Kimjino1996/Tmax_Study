import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../ui/Rating'
export default function CompareTable(){

    const [compareDatas,setCompareDatas]=useState([]);
    let process = require('../../../../db/myprocess.json');
    
    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/compare`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCompareDatas(data);
            console.log(data);
        })
        //.catch(error => console.log(error))
    },[]);

    const compareTableList1=compareDatas.map((item,idx)=>(
        <td className="product-image-title">
            <div className="compare-remove">
            <button><i className="las la-trash"></i></button>
            </div>
            <Link to={`/productdetail/${item.id}`}><img className="img-fluid" src={item.image[0]} alt=""/></Link>
            <div className="product-title">
            <Link to={`/productdetail/${item.id}`}>{item.name}</Link> 
            </div>
            <div className="compare-btn">
            <Link to={`/productdetail/${item.id}`}>Select option</Link>
            </div>
        </td>
    )).slice(0,3);
    const compareTableList2=compareDatas.map((item,idx)=>(
        <td className="product-price">
                                            <span className="amount old">{item.price}</span>
                                                <span className="amount">{item.price}</span>
        </td>
    )).slice(0,3);
    const compareTableList3=compareDatas.map((item,idx)=>(
        <td className="product-desc">
        <p>
            {item.shortDescription}    
        </p>
    </td>
    )).slice(0,3);
    const compareTableList4=compareDatas.map((item,idx)=>(
        <td className="product-rating">
                {item.rating && item.rating > 0 ? (
                        <Rating ratingValue={item.rating} />
                    ) : (
                    ""
                )}
        </td>
    )).slice(0,3);
    return (<>
    
    <div className="compare-main-area pt-90 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="compare-page-content">
                        <div className="compare-table table-responsive">
                            <table className="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <th className="title-column">Product Info</th>
                                        {compareTableList1}
                                    </tr>
                                    <tr>
                                        <th className="title-column">Price</th>
                                        {compareTableList2}
                                       
                                    </tr>
                                    <tr>
                                        <th className="title-column">Description</th>
                                        {compareTableList3}
                                       
                                    </tr>
                                    <tr>
                                        <th className="title-column">Rating</th>
                                        {compareTableList4}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    
    </>);
}