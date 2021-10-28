import { ROOT_URL, HEADERS } from "./options";

// Generate a unique token for storing your bookshelf data on the backend server.

export const getBook = (bookId) =>
	fetch(`${ROOT_URL}/books/${bookId}`, { headers: HEADERS })
		.then((res) => res.json())
		.then((data) => data.book);

export const getAllBooks = () =>
	fetch(`${ROOT_URL}/books`, { headers: HEADERS })
		.then((res) => res.json())
		.then((data) => data.books);

export const updateBook = (book, shelf) =>
	fetch(`${ROOT_URL}/books/${book.id}`, {
		method: "PUT",
		headers: {
			...HEADERS,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ shelf }),
	}).then((res) => res.json());

export const searchBook = (query) =>
	fetch(`${ROOT_URL}/search`, {
		method: "POST",
		headers: {
			...HEADERS,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	})
		.then((res) => res.json())
		.then((data) => data.books);
