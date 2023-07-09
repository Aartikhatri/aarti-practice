import React from 'react'
import { Outlet } from 'react-router-dom'
import Context from './Context'

const Body = () => {
  return (
    <div>
      <Context >
        <h1 className='text-center m-4 p-2'> User </h1>
            <Outlet />

      </Context>
        
    </div>
  )
}

export default Body
