// Define the initial state
const initialState = {
    isLoggedIn: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        checkingAccount: '',
        savingsAccount: '',
        creditcard: ''
    }
};

// Define the reducer
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };

        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
            };

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

// Create the Redux store
export default rootReducer;
