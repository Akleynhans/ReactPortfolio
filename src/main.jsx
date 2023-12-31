import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// create routes
const router = createBrowserRouter([
  {
    path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <Home />,
        },
        {
            path: '/Work',
            element: <Work />,
        },
        {
            path: '/Resume',
            element: <Resume />,
        },
        {
            path: '/Contact',
            element: <Contact />,
        },
        ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
