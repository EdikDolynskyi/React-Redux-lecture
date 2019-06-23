import { combineReducers } from "redux";
import users from "../users/reducer";
import userPage from "../userPage/reducer";

const rootReducer = combineReducers({
    users,
    userPage
});

export default rootReducer;
