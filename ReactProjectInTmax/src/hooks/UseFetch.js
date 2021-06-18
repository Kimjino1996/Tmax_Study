import React,{useState,useEffect} from 'react';

export default function UseFetch({url}){

        let process = require('../db/myprocess.json');
        const [newData, setnewData] = useState([]);
        useEffect(() => {
            fetch(`http://${process.IP}:${process.PORT}/${url}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setnewData(data);
            })
            //.catch(error => console.log(error))
        },[]);

        
}