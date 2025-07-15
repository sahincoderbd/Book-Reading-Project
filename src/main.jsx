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

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=> fetch ('books.json')
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
      path:'/book-details',
      element:<BookDetails></BookDetails>
    }
  
  
  ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
