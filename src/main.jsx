import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebTemp from './WebTemp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,Project,Skill,Achievement,Contact,PasswordGenerator,CurrencyConverter } from './components/Index.js'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"project",
          element:<Project/>
        },
        {
          path:"skill",
          element:<Skill/>
        },
        {
          path:"achievement",
          element:<Achievement/>
        },
        {
          path:"contact",
          element:<Contact/>
        }
      ]
    },
    {
      path:"/websites/",
      element:<WebTemp/>,
      children:[
        {
          path:"passwordGenerator",
          element:<PasswordGenerator/>
        },
        {
          path:"currencyConverter",
          element:<CurrencyConverter/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
