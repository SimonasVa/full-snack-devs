import { useState } from "react";
import { RequestState } from "../model/request-state.js";

export const useRegisterBook = () => {
  const [requestState, setRequestState] = useState();
  const [book, setBook] = useState();

  const registerBook = async (data) => {
    setRequestState(RequestState.PENDING);

    try {
      const response = await fetch(
        "https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      ).then((response) => response.json());

      setBook(response);
      setRequestState(RequestState.FINISHED);
    } catch {
      setRequestState(RequestState.ERROR);
    }
  };

  return { registerBook, requestState, book };
};
