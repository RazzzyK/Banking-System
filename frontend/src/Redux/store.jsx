// Define the initial state
const initialState = {
    isLoggedIn: false,
    user: {
        firstName: '',
        lastName: '',
        email: ''
    }
};

// Define the reducer
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        default:
            return state;
    }
}

// Create the Redux store
export default rootReducer;
