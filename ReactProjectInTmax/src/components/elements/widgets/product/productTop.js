import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailRight from './ProductDetailRight';

export default function productTop({productData}){

    return (
    <>
    <div className="shop-area pt-100 pb-100">
        <div className="container">
            <div className="row">
    <ProductDetailLeft/>
    <ProductDetailRight
        productData={productData}
    />

            </div>
        </div>
    </div>
    </>
    );
}