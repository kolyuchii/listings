import React from 'react';
import './update.scss';
import classnames from 'classnames';

const ListingComponent = (props) => {
    const {
        title,
        description,
        address,
        bedrooms,
        postcode,
        price,
        images,
        datepicker,
        errors,
        onSubmit,
        addPhoto,
        removePhoto,
    } = props;
    function getImages() {
        return images.map((image, i) => {
            return (
                <div key={i} className="update__add-images__item" onClick={removePhoto.bind(null, i)}>
                    <img className="image" src={image} alt=""/>
                </div>
            );
        });
    }

    const errorsClassNames = {
        price: classnames({
            'has-error': errors.price,
            'update__block': true,
        }),
        description: classnames({
            'has-error': errors.description,
            'update__block': true,
        }),
        address: classnames({
            'has-error': errors.address,
            'update__block': true,
        }),
        postcode: classnames({
            'has-error': errors.postcode,
            'update__block': true,
        })
    };
    return (
        <div className="update">
            <h1 className="update__title">{title}</h1>
            <form onSubmit={onSubmit}>
                <div className="update__upload-images">
                    <input type='file' id="images" onChange={addPhoto} multiple accept="image/*" />
                </div>
                {images ? (<div className="update__add-images">
                    { getImages() }
                </div>) : null }
                <div className={errorsClassNames.postcode}>
                    <label className="update__block--label" htmlFor="postcode">Postcode</label>
                    <input className="update__input" type="text" id="postcode" defaultValue={postcode}/>
                    <span className="error">Required field</span>
                </div>
                <div className="update__block">
                    <label className="update__block--label" htmlFor="bedrooms">Bedrooms</label>
                    <select className="update__input" id="bedrooms" defaultValue={bedrooms}>
                        <option id="0">0</option>
                        <option id="1">1</option>
                        <option id="2">2</option>
                        <option id="3">3</option>
                    </select>
                </div>
                <div className={errorsClassNames.address}>
                    <label className="update__block--label" htmlFor="address">Address</label>
                    <input className="update__input" type="text" id="address" defaultValue={address}/>
                    <span className="error">Required field</span>
                </div>
                <div className={errorsClassNames.description}>
                    <label className="update__block--label" htmlFor="description">Description</label>
                    <textarea className="update__input update__textarea" id="description" defaultValue={description} />
                    <span className="error">Required field</span>
                </div>
                <div className={errorsClassNames.price}>
                    <label className="update__block--label" htmlFor="price">Price</label>
                    <input className="update__input" type="text" id="price" min="0" defaultValue={price}/>
                    <span className="error">Required field. The price must be no less than 0. Only numbers allowed.</span>
                </div>
                <div className="update__block">
                    <label className="update__block--label" htmlFor="expired">Expired</label>
                    {datepicker}
                </div>
                <button data-message="Save button" className="update__button" type="submit" tabIndex="0">Save</button>
            </form>
        </div>
    )
};

export default ListingComponent;