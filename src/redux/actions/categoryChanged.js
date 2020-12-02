const CATEGORY_CHANGED = category => {
   return {
    type: 'CATEGORY_CHANGED',
    payload: category
   }
};

export default CATEGORY_CHANGED;