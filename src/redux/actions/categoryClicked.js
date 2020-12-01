const { defaultCipherList } = require("constants");

 const CATEGORY_CLICKED = category => ({
    type: 'CATEGORY_CLICKED',
    payload: category
    });
    
export default CATEGORY_CLICKED;