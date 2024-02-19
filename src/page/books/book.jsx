import { Card } from "../../components/card/index.js";
import "./books.css";

export const Book = (props) => {
  const { book, onBookSelect } = props;

  return (
    <Card>
      <img className={"image"} src={book.cover} alt={book.title} />
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Price: {book.price}</p>
      <button onClick={() => onBookSelect(book.id)}>
        {book.reserved ? "Grąžinti" : "Išduoti"}
      </button>
    </Card>
  );
};
