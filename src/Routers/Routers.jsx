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
import AdminRoute from "./AdminRoute";
import AllBgRequests from "../pages/dashboard/AllRequest.jsx/AllBgRequests";
import ContentManagement from "../pages/dashboard/Content Management/ContentManagement";
import AddBlog from "../pages/dashboard/AddBlog/AddBlog";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/dashboard/Request Details/BlogDetails";
import Search from "../pages/Search/Search";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome";

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
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
            ,
            {
                path: '/details/:id',
                element: <BlogDetails></BlogDetails>
            }
            ,
            {
                path: '/search',
                element:<Search></Search>
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
              path:'/dashboard/user',
              element:<DashboardHome></DashboardHome>
            },
            
            {
              path:'/dashboard/admin',
              element:<AdminHome></AdminHome>
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
              element: <PrivateRoute>
                <RequestDetails></RequestDetails>
              </PrivateRoute>
            }
            ,
            // admin related route
            {
              path: '/dashboard/allusers',
              element: <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            }
            ,
            {
              path: '/dashboard/all-blood-donation-request',
              element: <AdminRoute>
              <AllBgRequests></AllBgRequests>
              </AdminRoute>
            }
            ,
            {
              path: ' /dashboard/content-management',
              element: <AdminRoute>
              <ContentManagement></ContentManagement>
              </AdminRoute>
            }
            ,
            {
              path: '/dashboard/content-management/add-blog',
              element: <AdminRoute>
              <AddBlog></AddBlog>
              </AdminRoute>
            }
            ,

          ]
        }
      ]);


export default Routers;