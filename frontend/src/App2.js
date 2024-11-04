import React, { useState } from 'react'
import { LoginFormF,LoginFormC } from './LoginForm'

export default function App2() {
    const [visible,setVisible]=useState(true);
  return (
    <div>

{ visible ?
       <>
        <LoginFormC/>
         <LoginFormF/>
       </>
       :null}
       <button onClick={()=>
        setVisible(!visible)
       }>cliquer ici</button>


    </div>
  )
}