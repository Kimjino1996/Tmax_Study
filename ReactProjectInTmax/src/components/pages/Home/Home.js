import React from 'react';
import Header from '../../layout/Header';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../../pages/deal/Deal';
import Blog from '../../pages/blog/Blog';
import Footer from '../../pages/footer/Footer';
import Banner from '../../elements/ui/Banner';
export default function Home(){
    return (

        <>

            <Header/>
            <Banner/>
            <Brand />
            <Deal />
            <Blog/>
            <Footer/>

        </>
    );

}