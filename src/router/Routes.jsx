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
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <ToyDetail />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/toys?id=${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRouter>
            <MyToys />
          </PrivateRouter>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/addToys",
        element: (
          <PrivateRouter>
            <AddToys />
          </PrivateRouter>
        ),
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
