import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Shooter from "./Components/Shooter/Shooter"
import Details from "./Components/Details/Details"
import Pixel from "./Components/Pixel/Pixel"
import Superhero from "./Components/Superhero/Superhero"
import Sailing from "./Components/Sailing/Sailing"
import Permadeath from "./Components/Permadeath/Permadeath"

const routers=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'shooter',element:<Shooter/>},
    {path:'superhero',element:<Superhero/>},
    {path:'pixel',element:<Pixel/>},
    {path:'permadeath',element:<Permadeath/>},
    {path:'sailing',element:<Sailing/>},
    {path:'details/:id',element:<Details/>},
]}
])
export default function App() {

  return <>
  <RouterProvider router={routers}/>
  </>
}