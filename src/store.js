import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./redux/budget";

const rootReducer = combineReducers({
	budget: budgetReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
