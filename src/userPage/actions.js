import { SET_CURRENT_USER_ID, DROP_CURRENT_USER_ID, SHOW_PAGE, HIDE_PAGE } from "./actionTypes";

export const setCurrentUserId = id => ({
    type: SET_CURRENT_USER_ID,
    payload: {
        id
    }
});

export const dropCurrentUserId = () => ({
    type: DROP_CURRENT_USER_ID
});

export const showPage = () => ({
    type: SHOW_PAGE
});

export const hidePage = () => ({
    type: HIDE_PAGE
});