import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART
} from '../actions/action-types/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            title: "White Book",
            price: 8.50,
            oldPrice: 12.50,
            image: "/images/shop/1.jpg",
            imageHover: "/images/shop/1-1.jpg"
        },
        {
            id: 2,
            title: "Red Side Book",
            price: 12.50,
            oldPrice: 20.50,
            image: "/images/shop/2.jpg",
            imageHover: "/images/shop/2-1.jpg"
        },
        {
            id: 3,
            title: "Book With Pen",
            price: 8.50,
            oldPrice: 12.50,
            image: "/images/shop/3.jpg",
            imageHover: "/images/shop/3-1.jpg"
        },
        {
            id: 4,
            title: "Drop Side Book",
            price: 7.50,
            oldPrice: 11.50,
            image: "/images/shop/4.jpg",
            imageHover: "/images/shop/4-1.jpg"
        },
        {
            id: 5,
            title: "Color Book",
            price: 10.50,
            oldPrice: 10.50,
            image: "/images/shop/5.jpg",
            imageHover: "/images/shop/5-1.jpg"
        },
        {
            id: 6,
            title: "The Jungle Book",
            price: 15.00,
            oldPrice: 25.00,
            image: "/images/shop/6.jpg",
            imageHover: "/images/shop/6-1.jpg"
        }
    ],
    relatedProducts: [
        {
            id: 1,
            title: "White Book",
            price: 8.50,
            oldPrice: 12.50,
            image: "/images/shop/1.jpg",
            imageHover: "/images/shop/1-1.jpg"
        },
        {
            id: 2,
            title: "Red Side Book",
            price: 12.50,
            oldPrice: 20.50,
            image: "/images/shop/2.jpg",
            imageHover: "/images/shop/2-1.jpg"
        },
        {
            id: 3,
            title: "Book With Pen",
            price: 8.50,
            oldPrice: 12.50,
            image: "/images/shop/3.jpg",
            imageHover: "/images/shop/3-1.jpg"
        }
    ],
    addedItems:[],
    total: 0,
    shipping: 0
}

const cartReducer= (state = initState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    )
}