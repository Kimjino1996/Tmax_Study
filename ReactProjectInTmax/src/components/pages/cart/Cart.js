import Footer from '../../pages/footer/Footer';
import Header from '../../layout/Header';
//import CartContents from '../../elements/ui/CartContents';
import CartTable from '../../elements/widgets/carttable/CartTable';
export default function Cart(){

    return(<>
        <Header></Header>
        <CartTable></CartTable>
        <Footer></Footer></>
        );
}