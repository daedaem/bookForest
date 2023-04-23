import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Header from "./components/Header";
const routerData = [
  {
    path: "/",
    element: <Main />,
    // loader: rootLoader,
    withAuth: false,
  },
  {
    path: "/login",
    element: <Login />,
    withAuth: false,
  },
  {
    path: "/signup",
    element: <Signup />,
    // withAuth: false,
  },
];
export const routers = createBrowserRouter(
  routerData.map((router) => ({
    path: router.path,
    withAuth: router.withAuth,
    element: (
      <>
        <Header />
        {router.element}
      </>
    ),
  }))
);
