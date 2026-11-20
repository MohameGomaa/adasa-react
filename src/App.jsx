
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Aboutus from "./pages/Aboutus";
import Light from "./components/Light";
import Portrait from "./components/Portrait";
import Nature from "./components/Nature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter} from'react-router-dom'
import MainLayout from "./Layouts/MainLayout";


const router = createBrowserRouter([
  {
    path: "" , element: <MainLayout/> ,children: [
      {index: true, element: <Home/>},
      {path: "about" , element: <Aboutus/>},
      {path: "blog", children: [
        {index: true, element: <Blogs/>},
        {path: "light", element: <Light/>},
        {path: "portrait", element: <Portrait/>},
        {path: "nature", element: <Nature/>}
      ]},
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
