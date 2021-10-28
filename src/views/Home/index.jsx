import { useEffect } from "react";
import ListBooks from "../../components/ListBooks";
import { useBooks } from "../../hooks/useBooks";
import { getAllBooks } from "../../services/books";
import "./styles.css";

function Home() {
	const { books, setBooks, changeShelfBook } = useBooks();

	useEffect(async () => {
		const response = await getAllBooks();
		console.log(response);
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
		<div className="home">
			{books &&
				filterdBooks.map((b) => (
					<section key={b.nameSection}>
						<h2 className="home__title-section">{b.nameSection}</h2>
						<ListBooks books={b.books} changeShelfBook={changeShelfBook} />
					</section>
				))}
		</div>
	);
}

export default Home;
