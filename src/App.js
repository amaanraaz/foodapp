import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//using react-router-dom after installing 
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter }/>);
