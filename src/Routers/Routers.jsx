import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import Profile from "../pages/dashboard/Profile/Profile";


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
                element: <Signup></Signup>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
          ]
        },
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>,
          children:[
            {
              path:'/dashboard/home',
              element:<DashboardHome></DashboardHome>
            },
            {
              path:'/dashboard/profile',
              element:<Profile></Profile>
            }
          ]
        }
      ]);


export default Routers;