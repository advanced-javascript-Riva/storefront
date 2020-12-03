
const ADD_PRODUCT = product => {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            product,
            quantity:1
        }
    }
};

export default ADD_PRODUCT;