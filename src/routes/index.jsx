import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import PublicLayout from "../layout/PublicLayout";
import About from "../pages/About";
import Categorie, { loadCategorie } from "../pages/Categorie";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Product from "../pages/Product";


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
                path:"/categories/categorie/:id",
                element:<Product/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])