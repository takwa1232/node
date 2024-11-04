import React from 'react'
import Person from "./Person/Person";


function App() {
  return (
    <div className='App'>
        <h1>state and props</h1>

        <Person esm="takwa" city="ariena"/>
        <Person esm="nour" city="tunis"/>
        <Person esm="amin" city="sousse"/>
        
    </div>
  );
}

export default App;