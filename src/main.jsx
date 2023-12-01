import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages

// create routes
const router = createBrowserRouter([
  {
    path: '/',
        element: <App />,
        children: [

        ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
