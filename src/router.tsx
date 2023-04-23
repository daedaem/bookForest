import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import EditProfile from "./pages/EditProfile";
import GeneralLayout from "./layout/GeneralLayout";
import ErrorPage from "./pages/ErrorPage";

const routerData = [
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    withAuth: false,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    withAuth: false,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
    withAuth: false,
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
    errorElement: <ErrorPage />,
    withAuth: true,
  },
];
export const routers = createBrowserRouter(
  routerData.map((router) => ({
    path: router.path,
    withAuth: router.withAuth,
    element: (
      <GeneralLayout withAuth={router.withAuth}>{router.element}</GeneralLayout>
    ),
    errorElement: <ErrorPage />,
  }))
);
