import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserInfo from "./components/UserInfo.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { fetchCandidates } from "./Redux/candidatesSlice.ts";
import Layout from "./components/Layout.tsx";

store.dispatch(fetchCandidates());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      { path: "/:id", element: <UserInfo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
