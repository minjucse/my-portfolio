
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'
import About from '../Pages/About/About'
import Skills from '../Pages/Skills/Skills'
import Projects from '../Pages/Projects/Projects'
import Blogs from '../Pages/Blogs/Blogs'
import Details from '../Pages/Projects/Details'
import Contract from '../Pages/Contract/Contract'

const Routes = createBrowserRouter ([
    {
        path: "/",
        element: <Main/>,
        errorElement: <PageNotFound/>,
        children: [
          {
            path: '/',
            element: <Home/>,
          },
          {
            path: 'about',
            element: <About/>,
          },
          {
            path: 'skills',
            element: <Skills/>,
          },
          {
            path: 'projects',
            element: <Projects/>,
          },
          {
          path: 'blogs',
          element: <Blogs/>,
        },
          {
            path: '/details/:detailId',
            element: <Details/>,
          },
          {
          path: 'contract',
          element: <Contract/>,
        },
          
        ]
      }
])


export default Routes