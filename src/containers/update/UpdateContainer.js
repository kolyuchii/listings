import React, { Component } from 'react';
import ListingComponent from 'ui/update';
import {connect} from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    updateListing
} from 'store/listings';
import {bindActionCreators} from 'redux';
import serialize from 'utils/serialize-form';

class UpdateContainer extends Component {
    constructor(props) {
        super(props);
        const listingId = Number(props.match.params.number);
        const listing = this.props.listings && this.props.listings[listingId];
        this.state = {
            expired: null,
            images: [],
            errors: {}
        };
        if (listing && listing.expired) {
            this.state.expired = new Date(listing.expired);
        }
        if (Number.isFinite(listingId)) {
            const listing = props.listings[listingId];
            this.state.images = listing.images || []
        }
    }
    render() {
        const listingId = Number(this.props.match.params.number);
        const listing = (this.props.listings && this.props.listings[listingId]) || {};
        return (
            <ListingComponent
                title={Number.isFinite(listingId) === false ? "Add new" : "Update"}
                description={listing.description}
                address={listing.address}
                bedrooms={listing.bedrooms}
                postcode={listing.postcode}
                price={listing.price}
                images={this.state.images}
                errors={this.state.errors}
                datepicker={this.getDatePicker()}
                removePhoto={this.removePhoto.bind(this)}
                addPhoto={this.addPhoto.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }

    getDatePicker() {
        return (
            <DatePicker
                selected={this.state.expired}
                onSelect={this.handleChange.bind(this)}
                dateFormat="dd/MM/yyyy"
                calendarClassName="datepicker"
                placeholderText="Click to select a date"
                minDate={new Date()}
            />
        );
    }
    handleChange(date) {
        this.setState({
            expired: date
        });
    }

    removePhoto(index) {
        if (this.state.images && this.state.images[index]) {
            const images = this.state.images;
            images.splice(index, 1);
            this.setState({
                images
            });
        }
    }
    addPhoto(event) {
        const element = event.target;
        const files = element.files;
        if (files) {
            for (let i = 0; i < files.length; i += 1) {
                const file = files[i];
                if (checkextension(file)) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this.updateImage(event);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    }
    updateImage(event) {
        const images = this.state.images;
        images.push(event.target.result);
        this.setState({
            images
        });
    }
    onSubmit(event) {
        event.preventDefault();
        const listingId = Number(this.props.match.params.number);
        const formData = serialize(event.target);
        if (this.state.images && this.state.images.length) {
            formData.images = this.state.images;
        }
        formData.expired = this.state.expired;

        const errors = {};
        if (!formData.price || /\D/.test(formData.price) || formData.price <= 0) {
            errors.price = true;
        }
        if (!formData.description) {
            errors.description = true;
        }
        if (!formData.address) {
            errors.address = true;
        }
        if (!formData.postcode) {
            errors.postcode = true;
        }
        if (Object.keys(errors).length > 0) {
            this.setState({
                errors
            });
            return false;
        }

        // save data to the Local storage and leave this page
        if (Number.isFinite(listingId)) {
            this.props.actions.updateListing(formData, listingId);
            this.props.history.push(`/listings/${listingId}`);
        } else {
            this.props.actions.updateListing(formData);
            this.props.history.push('/');
        }
    }
}

function checkextension(file) {
    return /\.(jpe?g|png)$/i.test(file.name);
}

function mapStateToProps(state) {
    return {
        listings: state.listings.listings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            updateListing
        }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateContainer)
