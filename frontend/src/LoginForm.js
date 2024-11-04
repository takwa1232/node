import React,{Component, useEffect, useState} from 'react'


 export class LoginFormC extends React.Component{
    state={
        email:'',
        pass:''
        }
        componentDidMount(){
            console.log('classe component did mount')

        }

    
        componentDidUpdate(){
         console.log('classe component did update')
        
        }
         componentWillUnmount(){
         console.log('classe component Will unmount')
        
        }
        
        handleEmail=(e)=>{
            this.setState({
                email:e.target.value
               
            })
        }
        handlepass=(e)=>{
            this.setState({
                pass:e.target.value       
            })
         }
    render(){
        return <div>
        <h2> class example</h2>
        <input value={this.state.email} onChange={this.handleEmail} placeholder='email'/>
        <input value={this.state.pass} onChange={this.handlepass} placeholder='pass'/>
        </div>
    }
}
export function LoginFormF() {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');


    useEffect(()=>{
        console.log('function component did mount')



    },[])

    useEffect(()=>{
        if(email==="")
            return 
        console.log('function component did update')



    },[email])




    function  handleEmail (e){
        setEmail(e.target.value)
    }  
    function handlepass(e){

            setPass(e.target.value  )
     }
    

    return <div>
    <h2> function example</h2>
    <input value={email} onChange={handleEmail} placeholder='email'/>
    <input value={pass} onChange={handlepass} placeholder='password'/>
    </div>
}