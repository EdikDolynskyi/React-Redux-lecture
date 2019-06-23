import { SET_CURRENT_USER_ID, DROP_CURRENT_USER_ID, SHOW_PAGE, HIDE_PAGE } from "./actionTypes";

const initialState = {
    userId: '',
    isShown: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER_ID: {
            const { id } = action.payload;
            return {
                ...state,
                userId: id
            };
        }
        case DROP_CURRENT_USER_ID: {
            return {
                ...state,
                userId: ''
            };
        }

        case SHOW_PAGE: {
            return {
                ...state,
                isShown: true
            };
        }

        case HIDE_PAGE: {
            return {
                ...state,
                isShown: false
            };
        }

        default:
            return state;
    }
}
