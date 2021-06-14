import React, { useState } from 'react';
import Title from '../../elements/ui/Title';
import TabMenu from '../../elements/ui/TabMenu';
import ProductView from '../../elements/widgets/product/ProductView';

export default function Deal(){

    const [ categoryName , setCategoryName ] = useState("fashion");
    console.log(categoryName);

    return(

        <section id="deal">
            <div className="container">
                <Title categoryName = {categoryName}/>
                <TabMenu setCategoryName = {setCategoryName}/>
                <ProductView categoryName = {categoryName}/>
               
            </div> 
        </section> 

    );
}