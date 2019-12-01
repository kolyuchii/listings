export const SET_LISTINGS = Symbol('SET_LISTINGS');
const storedData = window.localStorage.getItem('listings');
const initialState = {
    listings: storedData ? JSON.parse(storedData) : [],
};

export function updateListing(data, index) {
    return function (dispatch, getState) {
        const state = getState();
        const listings = state.listings.listings;

        if (!data) {
            return false;
        }

        if (index !== undefined) {
            listings.splice(index, 1, data);
        } else {
            listings.push(data);
        }

        window.localStorage.setItem('listings', JSON.stringify(listings));

        dispatch(setListings(listings));
    }
}

export function deleteListing(index) {
    return function (dispatch, getState) {
        const state = getState();
        const listings = state.listings.listings;
        if (index !== undefined) {
            listings.splice(index, 1);
        }

        window.localStorage.setItem('listings', JSON.stringify(listings));

        dispatch(setListings(listings));
    }
}

export function fetchListings() {
    return function(dispatch) {
        dispatch(setListings([]));
    }
}

export function setListings(listings) {
    return {
        type: SET_LISTINGS,
        listings
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_LISTINGS:
            return Object.assign({}, state, {
                listings: action.listings
            });
        default:
            return state;
    }
}