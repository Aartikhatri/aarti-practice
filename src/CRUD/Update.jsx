import axios from 'axios'
import React, {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UpdateDataContext } from './Context';



const Update = () => {
  const navigate = useNavigate(); 

  const { uname, id , email , setName , setEmail} = useContext(UpdateDataContext)


  const handleUpdate = (e)=> {
     e.preventDefault();
     axios.put(`https://64a7f546dca581464b85114d.mockapi.io/operationCrud/${id}` , { "name" :  uname ,  "email" : email })
     navigate('/read')
    }

  return (
    <div className='text-center'>
   

      <form  onSubmit={(e) => handleUpdate(e)} >

        <div className="form-floating mb-3">
          <input type="text" className="p-2 ms-2" value={uname}   onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        </div>

        <div className="form-floating">
         <input type="text" className="p-2 ms-2" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
        </div>

        
        <button type='submit' className='mt-2 p-2 rounded' > Update</button>       
      


      </form>

    </div>
  )
}

export default Update

