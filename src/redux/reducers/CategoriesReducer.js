//Should contain a list of categories as well as an active category
// each category should have a normalized name, display name and desc
// Create an action that will trigger the reducer to change active category
// Update active category in reducer when action is dispatched
import CATEGORY_CLICKED from '../actions/categoryClicked';

const initialState = {
    categories: ['food', 'beauty', 'home-decor']
}
const Categories = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY_CLICKED:
        return {
            ...state,
            categories: action.payload
        }
            // {
            //     name: action.name,
            //     display_name: action.display_name,
            //     description: action.description
            // }
        default: 
        return state;
    }
}
export default Categories;
