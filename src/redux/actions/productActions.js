import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS ,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: product,
    }
}

export const removeFromCart = () => {
    return {
        type: ActionTypes.REMOVE_CART,
    }
}