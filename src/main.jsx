import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Form from './assets/Form.jsx'
import AInputCheckBox from './interviewTask/AInputCheckBox.jsx'
import BDropdown from './interviewTask/BDropdown.jsx'


import Body from './Routings/Body.jsx'
import Home from './Routings/Home.jsx'
import About from './Routings/About.jsx'
import Contact from './Routings/Contact.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Customroute from './Routings/Customroute.jsx'

import Routes from './CRUD/Routes.jsx'
import RefHook from './RefHook.jsx'


// const AppRoute = createBrowserRouter([{
//     path : "/" ,
//     element : <Body />,
//     children :[
//        {
//          path : '/' ,
//          element : <Home />
//        },
//        {
//         path : '/about' ,
//         element : <About />
//       },
//       {
//         path : '/contct' ,
//         element : <Contact />
//       }
//     ]

// }])


ReactDOM.createRoot(document.getElementById('root')).render(
<>
    {/* <App /> */}
    {/* <AInputCheckBox /> */}
    {/* <BDropdown /> */}

    {/* <RouterProvider router={AppRoute} /> */}
    {/* <Customroute /> */}
    <Routes />
     <RefHook />
 </>
)
