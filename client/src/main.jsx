import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers/Routers";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <RouterProvider router={Routers} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
