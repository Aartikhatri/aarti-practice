import React, { createContext, useState } from 'react'

export const UpdateDataContext = createContext(null)

// uname : "" , email :  "" , id : "" , setName , setEmail , setId
const Context = ({children}) => {
    const [ uname , setName] = useState("") ;
    const [email , setEmail] = useState("");
    const [id , setId] = useState("");

  return (
      <UpdateDataContext.Provider value={ { uname , setName , email , setEmail , id , setId}} >
          {children}

      </UpdateDataContext.Provider>
  )
}

export default Context
