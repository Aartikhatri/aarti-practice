import React, { useState } from 'react'

const RefHook = () => {
    const [ val , setVal ] = useState("")

    let inputValue = React.createRef();
    let handleSubmit = e => {
    //   alert(`Input value: ${inputValue.current.value}`);
      console.log(inputValue);
   
      e.preventDefault();
    };

    

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputValue} placeholder='ref' /> <br />
          <input type='text' onChange={(e)=>setVal( e.target.value)} placeholder='State' />
          <button type="submit">Submit</button>
          <p> {val } </p>
        </form>
      </div>
    );
}

export default RefHook
