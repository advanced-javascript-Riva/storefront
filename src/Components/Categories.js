import React from 'react';
import CATEGORY_CHANGED from '../redux/actions/categoryChanged';
import CATEGORY_CLICKED from '../redux/actions/categoryClicked';
import store from '../redux/store';

const Categories = props => {
        return (
            <div>
                <button onClick= {() => {
                    store.dispatch({
                        type: CATEGORY_CLICKED,
                        payload: 'category'
                    });
                }}>
                </button>
            </div>
        )

}


