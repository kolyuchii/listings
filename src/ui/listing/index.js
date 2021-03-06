import React from 'react';
import classnames from 'classnames';
import './listing.scss';
import PropTypes from 'prop-types';

const ListingComponent = (props) => {
    const listing = classnames({
        'is-expired': props.isExpired,
        'listing': true
    });
    return (
        <div className={listing} onClick={props.onClick}>
            <div className="listing__image">
                <img src={props.image} alt="" className="image listing__image--item" />
            </div>
            <div className="listing__info">
                <div className="listing__address">{props.address}</div>
                <div className="listing__description">{props.description}</div>
                <ul className="listing__other-info">
                    <li>Postcode: {props.postcode}</li>
                    <li>Bedrooms: {props.bedrooms}</li>
                    <li>Price: {props.price}</li>
                </ul>
            </div>
        </div>
    )
};

ListingComponent.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    postcode: PropTypes.string,
    bedrooms: PropTypes.string,
    price: PropTypes.string,
};

export default ListingComponent;