import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";

import { NavigationService } from "./services/navigation-service.js";
import { App } from "./App.jsx";
import { Books } from "./page/books";
import { RegisterBook } from "./page/register-book";
import { Form } from "./page/form";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route
        path="*"
        element={<Navigate to={NavigationService.BOOKS_PATH} />}
      ></Route>
      <Route element={<Books />} path={NavigationService.BOOKS_PATH} />
      <Route
        element={<RegisterBook />}
        path={NavigationService.REGISTER_BOOK_PATH}
      />
      <Route element={<Form />} path={NavigationService.FORM_PATH} />
      <Route element={<Outlet />}></Route>
    </Route>,
  ),
);
