export const ROOT_URL = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

export const HEADERS = {
	Accept: "application/json",
	Authorization: token,
};
