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
      element:<ListedBooks></ListedBooks>
    },
    {
      path:'/pages-to-read',
      element:<PagesToRead></PagesToRead>
    },
    {
      path:'/book-details/:id',
      element:<BookDetails></BookDetails>
    },
    
  
  
  ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
