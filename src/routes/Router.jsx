import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";
import Gallery from "../pages/Gallery";
import SingleGallery from "../pages/SingleGallery";
import Projects from "../pages/Projects";
import Information from "../pages/Information";
import History from "../pages/History";
import Charity from "../pages/Charity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "aktualnosci", element: <Posts /> },
      { path: "aktualnosci/:id", element: <SinglePost /> },
      { path: "galeria", element: <Gallery /> },
      { path: "galeria/:id", element: <SingleGallery /> },
      { path: "dofinansowania", element: <Projects /> },
      { path: "informator", element: <Information /> },
      { path: "historia", element: <History /> },
      { path: "zespol-charytatywny", element: <Charity /> },
      
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;