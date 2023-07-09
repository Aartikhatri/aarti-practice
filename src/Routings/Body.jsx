import React from 'react'
import Hearder from './Hearder'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <>
       <Hearder />
       <Outlet />
    </>
  )
}

export default Body
