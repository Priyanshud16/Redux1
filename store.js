import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./src/redux/reducer";
import { LoginReducer } from "./src/Login/LoginRedux/reducer";

// combineReducers() function ka istemal multiple reducers ko combine karne ke liye
const rootReducer = combineReducers({
  todos: TodoReducer,
  login: LoginReducer
});

// Combined reducer ko createStore() function ke sath use karke store create kiya gaya hai
export const store = createStore(rootReducer);
