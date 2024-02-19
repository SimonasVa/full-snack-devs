import "./header.css";
import { Link } from "react-router-dom";
import { NavigationService } from "../../services/navigation-service.js";
export const Header = () => {
  return (
    <header className={"header"}>
      <Link className={"link"} to={NavigationService.BOOKS_PATH}>
        Sąrašas
      </Link>
      <Link className={"link"} to={NavigationService.REGISTER_BOOK_PATH}>
        Registruoti knyga
      </Link>
      <Link className={"link"} to={NavigationService.FORM_PATH}>
        Apžvalga
      </Link>
    </header>
  );
};
