import { combineReducers } from 'redux';
import CategoriesReducer from './redux/Categories.js'
import ProductsReducer from './redux/Products.js'

const Reducer = combineReducers({

    categories: CategoriesReducer,
    products: ProductsReducer

});

export default Reducer;
