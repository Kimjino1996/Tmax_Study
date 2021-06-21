import Header from '../../layout/Header';
import Footer from '../../pages/footer/Footer';
import Bread from '../../elements/ui/Bread';
import TestTable from '../../elements/widgets/TestTable/TestTable';
import { Fragment } from 'react';

export default function Wishlist(){

    return(
        <Fragment>
            <Header/>
            <Bread productName ="Test List" />
            <TestTable></TestTable>            
            <Footer/>
        </Fragment>
    );
}