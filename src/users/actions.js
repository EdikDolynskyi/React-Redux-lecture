import { ADD_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";
import service from './service';

export const addUser = data => ({
    type: ADD_USER,
    payload: {
        id: service.getNewId(),
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