import { useEffect, useState } from "react";
import { getAllBooks, updateBook } from "../../services/books";
import ListHomeBooks from "../../components/ListHomeBooks";

function Home() {
	const [books, setBooks] = useState([]);

	const changeShelfBook = ({ value, title }) => {
		setBooks((lb) =>
			lb.map((b) => {
				if (title == b.title) {
					b.shelf = value;
					updateBook(b.id, value);
				}
				return b;
			})
		);
	};

	useEffect(async () => {
		const response = await getAllBooks();
		setBooks(() => response);
	}, []);

	const filterdBooks = [
		{
			nameSection: "Currently Reading",
			books: books.filter((b) => b.shelf == "currentlyReading"),
		},
		{
			nameSection: "Want to Read",
			books: books.filter((b) => b.shelf == "wantToRead"),
		},
		{
			nameSection: "Read",
			books: books.filter((b) => b.shelf == "read"),
		},
	];

	return (
		<div>
			{books &&
				filterdBooks.map((b) => (
					<section key={b.nameSection}>
						<h2>{b.nameSection}</h2>
						<ListHomeBooks books={b.books} changeShelfBook={changeShelfBook} />
					</section>
				))}
		</div>
	);
}

export default Home;
