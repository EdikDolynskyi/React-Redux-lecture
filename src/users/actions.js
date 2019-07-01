import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS } from "./actionTypes";
const getNewId = () => (new Date()).getTime().toString();

export const addUser = data => ({
    type: ADD_USER,
    payload: {
        id: getNewId(),
        data
    }
});

export const updateUser = (id, data) => ({
    type: UPDATE_USER,
    payload: {
        id,
        data
    }
});

export const deleteUser = id => ({
    type: DELETE_USER,
    payload: {
        id
    }
});

export const fetchUsers = () => ({
    type: FETCH_USERS
});