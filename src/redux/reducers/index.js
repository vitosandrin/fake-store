import { combineReducers } from "redux";
import { addProductToCartReducer, productReducer, removeFromCartReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    addToCart: addProductToCartReducer,
});

export default reducers;