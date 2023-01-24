import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import PublicLayout from "../layout/PublicLayout";
import About from "../pages/About";
import Categorie, { loadCategorie } from "../pages/Categorie";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Product, { loadProduct } from "../pages/Product";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound/>,
        element:<PublicLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:"/categories",
                element: <Categories/>
            },
            {
                path:"/categories/:id",
                element:<Categorie/>,
                loader: loadCategorie,
                
            },
            {
                path:"/:id",
                element:<Product/>,
                loader:loadProduct,
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])