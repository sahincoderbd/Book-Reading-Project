import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home.jsx';
import ListedBooks from './Pages/ListedBooks.jsx';
import PagesToRead from './Pages/PagesToRead.jsx';
import BookDetails from './Pages/BookDetails.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'/listed-books',
      element:<ListedBooks></ListedBooks>,
      loader:()=>fetch('/books.json')
    },
    {
      path:'/pages-to-read',
      element:<PagesToRead></PagesToRead>,
      loader:()=>fetch('/books.json')
    },
    {
      path:'/book-details/:id',
      element:<BookDetails></BookDetails>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
  
  ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
