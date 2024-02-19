import { useState } from "react";
import { useRegisterBook } from "../../hooks/use-register-book.js";
import { Card } from "../../components/card/index.js";
import { useNavigate } from "react-router-dom";
import { NavigationService } from "../../services/navigation-service.js";
import "./register-book.css";

export const RegisterBook = () => {
  const { registerBook } = useRegisterBook();
  const [information, setInformation] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setInformation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, userInformation) => {
    event.preventDefault();
    return registerBook(userInformation).then(() =>
      navigate(NavigationService.BOOKS_PATH),
    );
  };

  return (
    <Card>
      <form
        className={"form"}
        onSubmit={(event) => handleSubmit(event, information)}
      >
        <label>
          Pavadinimas: 
          <input
            onChange={handleOnChange}
            name="title"
            value={information.title}
            required={true}
          />
        </label>
        <label>
          Autorius: 
          <input
            onChange={handleOnChange}
            name="author"
            value={information.author}
            required={true}
          />
        </label>
        <label>
          Kategorija: 
          <input
            onChange={handleOnChange}
            name="category"
            value={information.category}
            required={true}
          />
        </label>
        <label>
          Kaina: 
          <input
            onChange={handleOnChange}
            name="price"
            value={information.price}
            required={true}
          />
        </label>
        <label>
          Viršelis: 
          <input
            onChange={handleOnChange}
            name="cover"
            value={information.cover}
            required={true}
          />
        </label>
        <button className="button">Sukurti</button>
      </form>
    </Card>
  );
};
