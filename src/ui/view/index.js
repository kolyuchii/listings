import React from 'react';
import './view.scss';
// A listing contains the following:
// Multiple images
// Number of bedrooms
// Postcode
// Address
// Description
// Asking price
// Expired
const ListingViewComponent = (props) => {
    const {
        description,
        address,
        bedrooms,
        postcode,
        price,
        images,
        expired,
        onEdit,
        onDelete
    } = props;
    function getImages() {
        return images.map((image, i) => {
            return (
                <div key={i} className="update__add-images__item">
                    <img className="image" src={image} alt=""/>
                </div>
            );
        });
    }
    return (
        <div className="view">
            <h1 className="view__title">{address}</h1>
            {images ? (<div className="update__add-images">
                { getImages() }
            </div>) : null }
            <div className="view__block">
                <div className="view__block--label">Postcode</div>
                <div>{postcode}</div>
            </div>
            <div className="view__block">
                <div className="view__block--label">Bedrooms</div>
                <div>{bedrooms}</div>
            </div>
            <div className="view__block">
                <div className="view__block--label">Description</div>
                <div>{description}</div>
            </div>
            <div className="view__block">
                <div className="view__block--label">Price</div>
                <div>{price}</div>
            </div>
            <div className="view__block">
                <div className="view__block--label">Expired</div>
                <div>{expired}</div>
            </div>
            <button className="button" onClick={onEdit}>Edit</button>
            <button className="button" onClick={onDelete}>Delete</button>
        </div>
    )
};

export default ListingViewComponent;