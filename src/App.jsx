import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Aboutus from "./pages/Aboutus";
import Light from "./components/Light";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Notfound from "./Notfound";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <Aboutus /> },
      { path: "blog", element: <Blogs /> },
      { path: "blog/:id", element: <Light /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
