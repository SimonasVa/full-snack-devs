import { Header } from "./components/header/index.js";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/footer";

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
