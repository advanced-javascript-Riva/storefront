import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer'
import ProductsReducer from './ProductsReducer'
import CartReducer from './CartReducer';

const Reducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer

});

export default Reducer;
