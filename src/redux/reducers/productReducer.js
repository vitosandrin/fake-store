import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    products: [],
    cart: [],
    addItem: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    };
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state;
    };
};

export const addProductToCartReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.ADD_CART:
            return { ...state, ...payload }
        default:
            return state;
    }
}

