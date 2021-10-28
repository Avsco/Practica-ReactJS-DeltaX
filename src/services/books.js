import { ROOT_URL } from "./options";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	Accept: "application/json",
	Authorization: token,
};

export const getBook = (bookId) =>
	fetch(`${ROOT_URL}/books/${bookId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.book);

export const getAllBooks = () =>
	fetch(`${ROOT_URL}/books`, { headers })
		.then((res) => res.json())
		.then((data) => data.books);

export const updateBook = (book, shelf) =>
	fetch(`${ROOT_URL}/books/${book.id}`, {
		method: "PUT",
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ shelf }),
	}).then((res) => res.json());

export const searchBook = (query) =>
	fetch(`${ROOT_URL}/search`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	})
		.then((res) => res.json())
		.then((data) => data.books);