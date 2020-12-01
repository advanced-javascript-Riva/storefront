import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer'
import ProductsReducer from './ProductsReducer.js'

const Reducer = combineReducers({

    categories: CategoriesReducer,
    products: ProductsReducer

});

export default Reducer;
