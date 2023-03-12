import './App.css';
import { useRoutes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Images from './components/Images';

import Videos from './components/Videos';
import Chat from './components/Chat';


function App() {
  const router = useRoutes([
    {
      path:'/',
      element: <Register />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/app',
      element: <Dashboard />,
      children:[
        {
          path: 'images',
          element: <Images />
        },
        {
          path: 'videos',
          element: <Videos />
        },
        {
          path: 'chat',
          element: <Chat />
        },
      ]
    }
  ])
  return router
}

export default App;
