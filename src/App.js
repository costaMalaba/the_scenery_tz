import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './'

//Components
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  }
]);

const App = () => {
  return (
    <div style={{backgroundColor: 'rgba(0,178,216,255)', backgroundSize: 'cover', height: '150vh'}}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App