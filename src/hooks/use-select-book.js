import { useState } from "react";
import { RequestState } from "../model/request-state.js";

export const useSelectBook = () => {
  const [requestState, setRequestState] = useState();

  const editBook = async (id, data) => {
    setRequestState(RequestState.PENDING);

    try {
      await fetch(
        `https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      ).then((response) => response.json());

      return setRequestState(RequestState.FINISHED);
    } catch {
      setRequestState(RequestState.ERROR);
    }
  };

  return { editBook, requestState };
};
