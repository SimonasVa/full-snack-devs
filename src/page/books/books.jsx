import { useGetAllBooks } from "../../hooks/use-get-all-books.js";

import { useEffect } from "react";
import { RequestState } from "../../model/request-state.js";
import { Book } from "./book.jsx";
import { Spinner } from "../../components/spinner/index.js";
import { useSelectBook } from "../../hooks/use-select-book.js";

export const Books = () => {
  const { requestState, getAllBooks, books, setBooks } = useGetAllBooks();
  const { editBook } = useSelectBook();
  useEffect(() => {
    if (!requestState) {
      getAllBooks();
    }
  }, [requestState, getAllBooks]);

  if (!requestState || RequestState.PENDING === requestState) {
    return <Spinner />;
  }

  const handleSelectBook = (id) => {
    const selectedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, reserved: !book.reserved };
      }
      return book;
    });

    const filteredBook = books.filter(
      (book) =>
        book.id === id && { ...book, ...book, reserved: !book.reserved },
    );

    editBook(id, filteredBook).then(() => setBooks(selectedBook));
  };

  return books.map((book) => (
    <Book key={book.id} book={book} onBookSelect={handleSelectBook} />
  ));
};
