import { useState } from 'react'
import './index.css'

function Square() {
  let [value, setValue] = useState(null)


  function handleClick() {
    setValue('O')
    setNumber(num+1)

    // if ( num % 2 == 0 ) {
    //   setValue('O')
    //    setNumber(num + 1)
    // } 
    // setValue('X')
    //  setNumber(num + 1)

  }

  return <button className='square' onClick={handleClick}>{value}</button>
}



export default function Board() {


  return (
    <div className='board'>
       <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </div>
  )
}
