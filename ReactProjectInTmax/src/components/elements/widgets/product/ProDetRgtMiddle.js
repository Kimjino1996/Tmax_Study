
import { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle() {

    const { Id } = useParams();

    const [ varData, setVardata ] = useState([]);
    var process = require('../../../../db/myprocess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/product/${Id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setVardata(data);
           console.log(data);
        });
    },[Id]);
    
    return (
        <Fragment>
            <ColorAndSize 
                vData = {varData.variation}
            
            />
            <AddBuyAndCart /> 
        </Fragment>
    
    );
}
