const REMOVE_PRODUCT = productId => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: {
            productId: productId
        }
    }
};

export default REMOVE_PRODUCT;