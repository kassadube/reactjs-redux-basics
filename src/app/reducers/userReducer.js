
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;

const initialUserState = {
    name: "moshe34",
    age: 99
}
