import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Create from './Create'
import Read from './Read'
import Body from './Body'
import Update from './Update'

const appRouter = createBrowserRouter([{
    path : "/" ,
    element : <Body />,
    children : [
        {
            path : "/" ,
            element : <Create />,
        },
        {
          path : "/read" ,
          element : <Read />
        },
        {
          path : "/update" ,
          element : <Update />
        }
    ]
}])

const Routes = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Routes
