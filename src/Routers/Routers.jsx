import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";


    const Routers = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
          ]
        },
      ]);


export default Routers;