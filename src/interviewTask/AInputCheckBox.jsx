import React, { useState } from 'react'
const arr = [ "one" , "two" , "three"]

const AInputCheckBox = () => {
    const [filterArray , setFilterArray] = useState(arr)
    const [checked , setChecked ] = useState([])


    const handleDelete = (deleteItemIndex)=> {
      
        const newArray = filterArray.filter((array , i)=> {
            return i !== deleteItemIndex
        })

        setFilterArray(newArray)

    }

    const handleSelect = (e , checkedBoxIndex)=> {
       console.log(e.target.checked , checkedBoxIndex);
       setChecked([e.target.checked , checkedBoxIndex])
       console.log(checked);
        // setChecked( {value : e.target.checked , index : checkedBoxIndex})
    }

  return (
    <div>
     
          <ul>
             {
                filterArray.map((item , i)=> (
                    <li key={i}> 
                    <input type="radio" name="checked" onClick={(e)=> handleSelect(e , i)}  />{item} 
                     { checked[0] !== false && checked[1] === i && (<button  onClick={()=>handleDelete(i) } > Delete</button>)}
                     </li>
                ))
             }
          </ul>
    </div>
  )
}

export default AInputCheckBox
