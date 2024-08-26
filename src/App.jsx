
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Team from "./pages/team";
import ServiseSingle from "./pages/serviseSingle";
import Portfolio from "./pages/portfolio";
import Notfound404 from "./pages/notfound404";
import UsersById from "./pages/usersById";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path: "about",
          element:<About/>
        },
        {
          path:"shop",
          element:<Shop/>
        },
        {
          path:"team",
          element:<Team/>
        },
        {
          path:"serviseSingle",
          element:<ServiseSingle/>
        },
        {
          path:"portfolio",
          element:<Portfolio/>
        },
        {
          path:"/:id",
          element:<UsersById/>
        },
        {
          path:"*",
          element:<Notfound404/>
        }

        
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App