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
import CreateRequest from "../pages/dashboard/Create Request/CreateRequest";
import UpdateRequest from "../pages/dashboard/Update/UpdateRequest";
import MyRequest from "../pages/dashboard/My Requests/MyRequest";
import RequestDetails from "../pages/dashboard/Request Details/RequestDetails";
import AllRequest from "../pages/All Request/AllRequest";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";

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
            ,
            {
                path: '/requests',
                element: <AllRequest></AllRequest>
            }
            ,
          ]
        },
        {
          path:'/dashboard',
          element: <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>,
          children:[
            {
              path:'/dashboard',
              element:<DashboardHome></DashboardHome>
            },
            {
              path:'/dashboard/profile',
              element:<Profile></Profile>
            },
            {
              path: ' /dashboard/my-donation-requests'
            },
            {
              path: '/dashboard/create-donation-request',
              element: <CreateRequest></CreateRequest>
            }
            ,
            {
              path: '/dashboard/update/:id',
              element: <UpdateRequest></UpdateRequest>
            },
            {
              path: '/dashboard/my-donation-requests',
              element: <MyRequest></MyRequest>
            },
            {
              path: '/dashboard/details/:id',
              element: <RequestDetails></RequestDetails>
            }
            ,
            {
              path: '/dashboard/allusers',
              element: <AllUsers></AllUsers>
            }
            ,

          ]
        }
      ]);


export default Routers;