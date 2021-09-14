export const initialState = {
    basket:[
        
    ],
    user: null,
};

function reducer(state, action){
    switch (action.type) {
        case "ADD_TO_BASKET":
        // logicc for adding item to basket 
        return{
            
            ...state,
            basket: [...state.basket,action.item],
        };

       
        case "REMOVE_FROM_BASKET":
        // logic for removing item 
         return{state };
        default:
          return state;
    }
}

export default reducer;