import { useEffect } from "react";
import { getAllBooks } from "../../services/books";
import ListHomeBooks from "../../components/ListHomeBooks";
import { useBooks } from "../../hooks/useBooks";

function Home() {
	const { books, setBooks, changeShelfBook } = useBooks();

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
