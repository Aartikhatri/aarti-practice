import axios from 'axios'
import React, { useEffect , useState , useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'


import { UpdateDataContext } from './Context'



const Read = () => {
    const [ arrData , setArrData] = useState([])
    const { uname , setName , email , setEmail , id , setId } = useContext(UpdateDataContext)
    const Navigate = useNavigate()

    useEffect(()=> {
        getData()
    } , [arrData])

    const getData = async()=> {
        const data = await axios.get("https://64a7f546dca581464b85114d.mockapi.io/operationCrud")
        const array = data.data
        setArrData(array)
    }

    const handleDelte = (deleteItemIndex)=> {
        axios.delete(`https://64a7f546dca581464b85114d.mockapi.io/operationCrud/${deleteItemIndex}`)
     }

     const handleUpdate = (details)=> {
       const { name , id , email} = details
       setName(name)
       setEmail(email)
       setId(id);
       Navigate('/update')
     }

    return (
        <div className='m-5'>
            <table style={{width : '100%'}}>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                   
                        {
                           arrData && arrData.map((item , i)=> (
                                <tr key={item.id}>
                                <td>{ item.id }</td>
                                <td>{ item.name }</td>
                                <td> { item.email }</td>
                                <td> <button onClick={()=> handleDelte(item.id)} > Delete </button>
                                <button onClick={()=> handleUpdate(item)} > Update </button>
                                </td>
                                </tr>
                            ))
                        }                    
                </tbody>
            </table>
            <Link to={'/'} > 
               <div className='text-center mt-3'>
               <button >Back</button>
               </div>
             </Link>
        </div>
    )
}

export default Read
