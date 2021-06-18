import React, { useState } from 'react';
import Title from '../../elements/ui/Title';
import TabMenu from '../../elements/ui/TabMenu';
import ProductView from '../../elements/widgets/product/ProductView';

export default function Deal(){

    const [ categoryName , setCategoryName ] = useState("fashion");
    console.log(categoryName);
    let sliceNumber=12;
    let columNumber=3;

    return(

        <section id="deal">
            <div className="container">
                <Title name = "Hot Deal"/>
                <TabMenu setCategoryName = {setCategoryName}
                    categoryName={categoryName}
                />
                <ProductView 
                categoryName = {categoryName}
                sliceNumber={sliceNumber}
                columNumber={columNumber}
                />
               
            </div> 
        </section> 

    );
}