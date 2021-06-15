import Rating from '../../ui/Rating';

export default function ProDetRgtTop({productData}){
    return (
        <>
        <h2>Lorem ipsum fashion female top</h2>
        <div className="product-details-price">
            <span>$35.6  + {productData.rating}</span>
        </div>
        <div className="pro-details-rating-wrap">
            <Rating
                ratingValue={productData.rating}/>

        </div>
        <div className="pro-details-list">
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        </>
    );
}