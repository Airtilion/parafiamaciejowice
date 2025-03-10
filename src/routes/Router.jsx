import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Posts = lazy(() => import("../pages/Posts"));
const SinglePost = lazy(() => import("../pages/SinglePost"));
const Gallery = lazy(() => import("../pages/Gallery"));
const SingleGallery = lazy(() => import("../pages/SingleGallery"));
const Projects = lazy(() => import("../pages/Projects"));
const Information = lazy(() => import("../pages/Information"));
const History = lazy(() => import("../pages/History"));
const Charity = lazy(() => import("../pages/Charity"));
const ChildSafetyPolicies = lazy(() => import("../pages/ChildSafetyPolicies"));
const Graves = lazy(() => import("../pages/Graves"));

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
      { path: "standardy-ochrony-dzieci", element: <ChildSafetyPolicies />},
      { path: "cmentarz", element: <Graves />},
      
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />;
    </Suspense>
  )
};

export default AppRouter;