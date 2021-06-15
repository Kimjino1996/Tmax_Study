import ProDetRgtTop from './ProDetRgtTop'
import ProDetRgtMiddle from './ProDetRgtMiddle';
import ProDetRgtBottom
 from './ProDetRgtBottom';
export default function ProductDetailRight({productData}){
    console.log(productData)
    return (
    <>
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-content ml-70">
                        <ProDetRgtTop
                            productData={productData}
                        />
                        <ProDetRgtMiddle
                            productData={productData}
                        />
                        <ProDetRgtBottom/>

                        
                    </div>
                </div>

    
    
    
    </>);

}