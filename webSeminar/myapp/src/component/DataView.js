import React, {Fragment,useState} from 'react'
import data from '../DB/dummy.json'
export default function DataView(){
    console.log(data)
    const [newData,setNewData]=useState(data);
    const searchData=newData.words.filter(word=>word.day===2)
    return (
        <>
        <ul>
            {data.days.map(item=>(<li>Day:{item.day}</li>))}
        </ul>
        <table>
            {
                data.words.map(word=>(<td>
                    <th>{word.eng}</th>
                    <th>{word.kor}</th>
                </td>))
            }
        </table>
        </>
    );
}