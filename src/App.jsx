
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

const routes = createBrowserRouter([
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  }
])
function App() {
  
  return (
    <div className='app-container'> 
        <RouterProvider router={routes} />
    </div>
  )
}

export default App
