import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";


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

            }
          ]
        },
      ]);


export default Routers;