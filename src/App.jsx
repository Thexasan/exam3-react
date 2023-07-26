import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Pricing from "./pages/Pricing/Pricing";
import Layot from "./Layot/Layot";
import Magazin from "./pages/Magazin/Magazin";
import Prodaja from "./pages/Prodaja/Prodaja";
import HowtoPriece from "./pages/HowtoPriece/HowtoPriece";
import Blog from "./pages/Blog/Blog";
import Help from "./pages/Help/Help";
import Bonus from "./pages/Bonus/Bonus";


const wifi = createBrowserRouter([
  {
    path:"/",
        element:<Layot />,
        children:[
          {
            index:true,
            element:<Blog />
          },
          {
            path:'/howtopriece',
            element:<HowtoPriece/>
          },
          {
            path:'/priecing',
            element:<Pricing />
          },
          {
            path:'/magazine',
            element:<Magazin />
          },
          {
            path:'/prodaja',
            element:<Prodaja/>
          },
          {
            path:'/help',
            element:<Help/>
          },
          {
            path:'/bonus',
            element:<Bonus/>
          }
        ]
  }
])

function App() {
  return (
 <>
 <RouterProvider router={wifi} />
 </>
  );
}

export default App;
