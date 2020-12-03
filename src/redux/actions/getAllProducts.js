const GET_ALL_PRODUCTS = (productId, quantity) => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload:  {
            productId,
            quantity: quantity
        }
    }
};
    
export default GET_ALL_PRODUCTS;