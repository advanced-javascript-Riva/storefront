import ADD_PRODUCT from '../actions/addToCart';
import REMOVE_PRODUCT from '../actions/removeFromCart'

const initialState = {
    products: []
};
const addProduct = (state = initialState, action) =>{
    switch (action.type) {
    case ADD_PRODUCT:
    return {
    ...state,
       productToAdd: Object.assign({}, action.payload)
    };
    case REMOVE_PRODUCT:
    return {
    ...state,
        productToRemove: Object.assign({}, action.payload)
};
    default:
    return state;
    }
}
export default addProduct;