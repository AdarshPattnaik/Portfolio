import React from "react";
// Importing React Router:
import {
  BrowserRouter
} from "react-router-dom";

import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import AnimatedRoutes from "../SubComponents/AnimatedRoutes.jsx";
import Loader from "../SubComponents/Loader.jsx";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <>
      {
        loading
          ? <Loader />
          : <BrowserRouter>
            <Nav />
            <Header />
            <AnimatedRoutes />
          </BrowserRouter>
      }

    </>
  );
};