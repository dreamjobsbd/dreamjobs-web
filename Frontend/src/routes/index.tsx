
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root";

//pages
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/auth/Dashboard"
import ActivateUser from "../pages/auth/ActivateUser"
import PostJob from "../pages/Jobs/PostJob"
import GetJobs from "../pages/Jobs/GetJobs";
import SingleJob from "../pages/Jobs/SingleJob";
import JobsByCategory from "../pages/Jobs/JobsByCategory";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/Menu/AboutUs";
import Feauters from "../pages/Menu/Feauters";

//layout
import Portfolios from "../Portfolios";

export const routes = createBrowserRouter([
  {
    element: <Root />,
    errorElement : <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path : "/dashboard",
        element : <Dashboard />
      },
      {
        path : "user/activate/:token",
        element : <ActivateUser />
      },
      {
        path : "/post-job",
        element : <PostJob />
      },
      {
        path : "/jobs",
        element : <GetJobs />
      },
      {
        path : "/jobs/:slug",
        element : <JobsByCategory />
      },
      {
        path : "/job/:id",
        element : <SingleJob />
      },
      {
        path: "/features",
        element : <Feauters />
      },
      {
        path : "/portfolio-website",
        element : <Portfolios />
      },
      {
        path : "/about-us",
        element : <AboutUs />
      }
      
    ],
  },
]) 
