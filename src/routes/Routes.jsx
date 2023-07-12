
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

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
          
        ]
      }
])


export default Routes