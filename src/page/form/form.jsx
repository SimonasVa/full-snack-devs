import { Card } from "../../components/card/index.js";
import { useState } from "react";
import "./toast.css";

export const Form = () => {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    feedback: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = (event) => {
    setInformation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <>
      <Card>
        <form onSubmit={(event) => handleSubmit(event, information)}>
          <label>
            Vardas:
            <input
              onChange={handleOnChange}
              name="firstName"
              value={information.firstName}
              required={true}
            />
          </label>
          <label>
            Pavardė:
            <input
              onChange={handleOnChange}
              name="lastName"
              value={information.lastName}
              required={true}
            />
          </label>
          <label>
            Atsiliepimas:
            <input
              onChange={handleOnChange}
              name="feedback"
              value={information.feedback}
              required={true}
            />
          </label>
          <button className="button">Sukurti</button>
        </form>
      </Card>
      {isOpen && (
        <div className={"snackbar"}>
          <p>{information.firstName}</p>
          <p>{information.lastName}</p>
          <p>{information.feedback}</p>
        </div>
      )}
    </>
  );
};
