import { useEffect, useState } from 'react'

import axios from 'axios'

import { option } from './option'


function App() {
  const [name, setName] = useState("");
  const [pwd, setPWd] = useState("");
  const [click, setClick] = useState(false)
  const [reslt, setRslt] = useState([])

  useEffect(()=>{
    getData()
  } , [])

  const getData = () => fetch("https://thingsally.com/api/usermanager/loginuser", {
    method: "POST",
    body: JSON.stringify({
      "username": name,
      "password": pwd
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8 ",
    }
  }).then(
    (res) => res.json()
  ).then((json) => setRslt(json), console.log(name, pwd),)


  const handleSubmit = (e) => {
    console.log(name, pwd);
    e.preventDefault();
 
  }

  return (
    <>
     
      <form action='POST' onSubmit={() => handleSubmit()} >
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} /> <br />
        <input type="text" placeholder='password' onChange={(e) => setPWd(e.target.value)} /> <br />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
