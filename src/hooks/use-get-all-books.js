import { useState } from "react";
import { RequestState } from "../model/request-state.js";

export const useGetAllBooks = () => {
  const [requestState, setRequestState] = useState();
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    setRequestState(RequestState.PENDING);

    try {
      const response = await fetch(
        "https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books",
      ).then((response) => response.json());

      setBooks(response);
      setRequestState(RequestState.FINISHED);
    } catch {
      setRequestState(RequestState.ERROR);
    }
  };

  return { getAllBooks, requestState, books, setBooks };
};
