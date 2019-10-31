import axios from "axios";

const initialState = {
	email: null,
	firstName: null,
	lastName: null
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";



export default function userReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
}
