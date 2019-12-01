import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListingComponent from 'ui/listing';
import EmptyListComponent from 'ui/empty';

class ListingContainer extends Component {
    render() {
        if (this.props.listings && this.props.listings.length) {
            return this.props.listings.map((item, index) => <ListingComponent
                key={index}
                isExpired={new Date() >= new Date(item.expired)}
                image={item.images ? item.images[0] : null}
                address={item.address}
                description={item.description}
                bedrooms={item.bedrooms}
                postcode={item.postcode}
                price={item.price}
                onClick={this.onClick.bind(this, index)}
            />);
        }
        return (
            <EmptyListComponent />
        );
    }
    onClick(index) {
        this.props.history.push(`/listings/${index}`);
    }
}

function mapStateToProps(state) {
    return {
        listings: state.listings.listings
    }
}

export default connect(
    mapStateToProps,
    null
)(ListingContainer)
