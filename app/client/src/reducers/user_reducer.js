import { 
        
        LOGIN_USER, 
        REGISTER_USER,
        UPDATE_DATA_USER,
        CLEAR_UPDATE_USER, 
        ON_SUCCESS_BUY_USER, 
        AUTH_USER, 
        REMOVE_CART_ITEM_USER, 
        GET_CART_ITEMS_USER, 
        LOGOUT_USER, 
        ADD_TO_CART_USER

    } from './../actions/types';

    export default function(state={} , action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, success: action.payload }
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case AUTH_USER: 
            return { ...state, userData: action.payload } 
        case LOGOUT_USER:
            return {...state ,  userData: {
                    isAuth : false,
                    error : false,
                    isAdmin : false,
                    email : '',
                    name: '',
                    lastname: '',
                    role: 0,
                    cart: [],
                    history: []
                },
                loginSuccess:  false
            }
        case ADD_TO_CART_USER:
            return {...state, userData: {
                ...state.userData,
                cart: action.payload
            } }
        case GET_CART_ITEMS_USER:
            return {...state, cartDetail: action.payload }
        case REMOVE_CART_ITEM_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                successBuy: action.payload.success,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }
        case UPDATE_DATA_USER:
            return {
                ...state,
                updateUser: action.payload
            }
        case CLEAR_UPDATE_USER:
            return {
                ...state,
                updateUser: action.payload
            }
        default:
            return state;
    }
}