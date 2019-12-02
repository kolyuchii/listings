import React from 'react';
import './view.scss';
import PropTypes from 'prop-types';

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
            <button data-message="Edit button" className="button" onClick={onEdit} tabIndex="0">Edit</button>
            <button data-message="Delete listing button" className="button" onClick={onDelete} tabIndex="0">Delete</button>
        </div>
    )
};

ListingViewComponent.propTypes = {
    description: PropTypes.string,
    address: PropTypes.string,
    bedrooms: PropTypes.string,
    postcode: PropTypes.string,
    price: PropTypes.string,
    images: PropTypes.array,
    expired: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default ListingViewComponent;