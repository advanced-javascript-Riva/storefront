import CATEGORY_CHANGED from '../actions/categoryClicked';

const initialState = {
    products: []
}
const Products = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_CHANGED:
        return {
            ...state,
            products: action.payload
        }
        default: 
        return state;
    }
}
export default Products;