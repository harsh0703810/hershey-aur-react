import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,  createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home/Home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      
      <Route path="user/:userid" element={<User/>}/>
      <Route

      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
