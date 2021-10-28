import Book from "../Book";
import "./styles.css";

function ListBooks({ books, changeShelfBook }) {
	return books.length == 0 ? (
		<div>No Hay libros en esta seccion</div>
	) : (
		<div className="listBooks">
			{books.map((b) => (
				<Book
					key={b.title}
					title={b.title}
					image={b.imageLinks.thumbnail}
					authors={b.authors}
					shelf={b.shelf}
					changeShelfBook={changeShelfBook}
				/>
			))}
		</div>
	);
}

export default ListBooks;
