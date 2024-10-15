import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import { createRoot} from 'react-dom/client'
import Home from './components/Home/Home'
import User from './components/User/User.jsx'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import Github, { githubusingloader } from './components/Github/Github.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element = {<Home />}/>  //or we can write path = "" instead of index
      <Route path = "about" element = {<About />}/>
      <Route path = "contact" element = {<Contact />}/>
      <Route path = "user/:userid" element = {<User />}/>
      <Route 
      loader = {githubusingloader}
      path = "github"
       element = {<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider  router={router} />

   </StrictMode>,
)
