import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx'
import Category from './Category.jsx';
import Recipe from './Recipe.jsx';
import Search from './Search.jsx';
import Toplist from './Toplist.jsx';
import '../styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:categoryId",
    element: <Category />,
  },
  {
    path: "/recipe/:recipeId",
    element: <Recipe />,
  },
  {
    path: "/search/:searchTerm",
    element: <Search />,
  },
  {
    path: "/topplista",
    element: <Toplist />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
