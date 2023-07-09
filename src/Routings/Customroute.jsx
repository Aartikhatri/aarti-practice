import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Action from '../lazyLoadingfiles/Action'
import Somthing from '../lazyLoadingfiles/Somthing'
import Another from '../lazyLoadingfiles/Another'



const LazyLoadingELement = lazy(() => import('../lazyLoadingfiles/Body.jsx'))


const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    errorElement : <h1> Page not Found </h1> ,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contct',
            element: <Contact />
        },
        {
            path: "/lazyLoading",
            element: <Suspense fallback={<h1>Loading</h1>} >
                <LazyLoadingELement />
            </Suspense>,
            children: [
                {
                    path: '/lazyLoading/action',
                    element: <Action />
                },
                {
                    path: '/lazyLoading/another',
                    element: <Another />
                },
                {
                    path: '/lazyLoading/something',
                    element: <Somthing />
                }
            ]

        }

    ]

}])

const Customroute = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Customroute
