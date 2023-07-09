import React from 'react'
import DRopdown from './DRopdown'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <DRopdown />
      <Outlet />
    </>
  )
}

export default Body
