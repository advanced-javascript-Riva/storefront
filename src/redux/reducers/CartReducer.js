import ADD_PRODUCT from '../actions/addToCart';
import REMOVE_PRODUCT from '../actions/removeFromCart'

const initialState = {
    cart: []
};
const CartReducer = (state = initialState, action) => {
    let cart = state.cart;
    switch (action.type) {
    case ADD_PRODUCT:
        cart.push(action.payload);
    return {
    ...state,
       cart:cart
    };
    case GET_ALL_PRODUCTS:
    let item = cart.find(item => item.product.id == action.payload.productId);
    let newCart = cart.filter(item => item.product.id != action.payload.productId);
    item.quantity = action.payload.quantity;
    newCart.push(item);
    return {
        ...state,
        cart: newCart
    };
    case REMOVE_PRODUCT:
    return {
    ...state,
        cart: cart.filter(item => item.product.id !== action.payload.productId);
};
    default:
    return state;
    }
}
export default CartReducer;