import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../system/Login/Login";
import Register from "../system/Register/Register";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/Home/UpdateToy/UpdateToy";
import ToyDetail from "../pages/ToyDetail/ToyDetail";
import AllToys from "../pages/AllToys/AllToys";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toy/:id",
        element: <ToyDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/toys?id=${params.id}`),
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/addToys",
        element: <AddToys />,
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/toys?id=${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
