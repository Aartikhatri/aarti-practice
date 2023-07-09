import axios from 'axios'
import React, { useState  } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")


  const handleSubmit = (e)=> {
     e.preventDefault();
     axios.post("https://64a7f546dca581464b85114d.mockapi.io/operationCrud" , { "name" :  name ,  "email" : email })
     navigate('/read')
    }

  return (
    <div className='text-center'>
   

      <form  onSubmit={(e) => handleSubmit(e)} >

        <div className="form-floating mb-3">
          <input type="text" className="p-2 ms-2"   onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        </div>

        <div className="form-floating">
         <input type="text" className="p-2 ms-2"  onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
        </div>

        
        <button type='submit' className='mt-2 p-2 rounded' >Submit</button>       
      


      </form>

    </div>
  )

  }


export default Create

 //    const data = await fetch("https://64a7f546dca581464b85114d.mockapi.io/operationCrud" , {
    //   method :  "POST" ,
    //    body : JSON.stringify({
    //     "name" :  name ,  "email" : email
    //    }),
    //    headers: {
    //     "Content-type": "application/json; charset=UTF-8 "
    //   }
    //  })



    //  const resp = await data.json()
    //  setArrData(resp) 