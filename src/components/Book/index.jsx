import { useState } from "react";
import "./styles.css";

function HomeBook({ title, image, authors, shelf = "none", changeShelfBook }) {
	const [currentShelf, setCurrentShelf] = useState(shelf);

	const handleChange = (e) => {
		if (e.target.value == currentShelf) return;
		setCurrentShelf(e.target.value);
		changeShelfBook({ value: e.target.value, title });
	};

	return (
		<article key={title} className="book">
			<div className="book__image" aria-label={title} style={{ backgroundImage: `url(${image})` }}></div>
			<h4>{title}</h4>
			<cite className="book__author">{authors?.map((a) => a)}</cite>
			<select className="book__options" value={currentShelf} onChange={handleChange}>
				<option value="moveTo" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</article>
	);
}

export default HomeBook;
