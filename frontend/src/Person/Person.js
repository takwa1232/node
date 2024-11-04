import React, { useState } from 'react';
const Person=(props)=>{
    const {esm,city}=props;
    const[isSeniorDev]=useState(false);
    const handleDevTypeChange=(e)=>{
    console.log(e.target.checked)
    };
    return(
        <div>
    <h1>this is a person his name is {esm} and his city is {city} , 
   {isSeniorDev?<p>he is a senior dev</p>: null} </h1>
    <input checked={isSeniorDev} type="checkbox" onChange={handleDevTypeChange}/>
                   </div>

    )
}

//  class Person extends Component {
//     state={
//         isSeniorDev:false,
//     }
//     render()
   
//     {
//         const {esm,city}=this.props;
//         const {isSeniorDev}=this.state
//         const handleDevTypeChange=(e)=>{
//             console.log(e.target.checked);

//         }
//         return (
//             <div>
//                 <h1>this is a person his name is {esm} and his city is {city} , 
//         {isSeniorDev?<p>he is a senior dev</p>: null} </h1>
//         <input checked={isSeniorDev} type="checkbox" onChange={handleDevTypeChange}/>
//             </div>
//         )
//  }
// }



  


// function Person(props) {

//     const{esm,city}=props;
//   return <h1>this is a person his name is {esm} and his city is {city} </h1>
   
// }

export default Person;