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
import Accordian from "./components/Accordian";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <div className="bg-black">
      <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />  
      </Provider>    
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
      },
      {
        path:"/accordian",
        element: <Accordian />
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter }/>);
