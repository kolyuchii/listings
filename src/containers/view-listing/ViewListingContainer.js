import React, { Component } from 'react';
import {connect} from "react-redux";
import ListingViewComponent from 'ui/view';
import EmptyListComponent from 'ui/empty';
import {bindActionCreators} from 'redux';
import {
    deleteListing
} from 'store/listings';
import { getDate } from 'utils/date';


class ViewListingContainer extends Component {
    render() {
        const listingId = Number(this.props.match.params.number);
        const listing = this.props.listings[listingId];
        if (listing) {
            return (
                <ListingViewComponent
                    description={listing.description}
                    address={listing.address}
                    bedrooms={listing.bedrooms}
                    postcode={listing.postcode}
                    images={listing.images}
                    price={listing.price}
                    expired={getDate(new Date(listing.expired))}
                    onEdit={this.onEdit.bind(this)}
                    onDelete={this.onDelete.bind(this)}
                />
            );
        }
        return (
            <EmptyListComponent />
        );
    }
    onEdit() {
        const listingId = Number(this.props.match.params.number);
        this.props.history.push(`/update/${listingId}`);
    }
    onDelete() {
        const listingId = Number(this.props.match.params.number);
        this.props.actions.deleteListing(listingId);
        this.props.history.push('/');
    }
}

function mapStateToProps(state) {
    return {
        listings: state.listings.listings
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            deleteListing
        }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewListingContainer)