import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import Login from "../components/Authentication/Login";
import GeneratePainting from "../components/GeneratePainting/GeneratePainting";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/generate-painting",
          element:<GeneratePainting></GeneratePainting>
        }
      ]
    },
  ]);