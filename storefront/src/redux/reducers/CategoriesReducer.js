//Should contain a list of categories as well as an active category
// each category should have a normalized name, display name and desc
// Create an action that will trigger the reducer to change active category
// Update active category in reducer when action is dispatched

import React from 'react';


const Categories = (state = [], action) => {
    switch(action.type) {
        case 'CATEGORY':
        return [
            ...state,
            {
                name: action.name,
                display_name: action.display_name,
                description: action.description
            }
        ];
        default: 
        return state;
    }
}

export default Categories;