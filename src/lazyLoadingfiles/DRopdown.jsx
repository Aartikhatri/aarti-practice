import React from 'react'
import { Link } from 'react-router-dom'

const DRopdown = () => {
  return (
    <div>
       <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><Link to={'/lazyLoading/action'} className="dropdown-item" >Action</Link></li>
    <li><Link to={'/lazyLoading/another'} className="dropdown-item" >Another action</Link></li>
    <li><Link to={'/lazyLoading/something'} className="dropdown-item" >Something else here</Link></li>
  </ul>
</div>
    </div>
  )
}

export default DRopdown
