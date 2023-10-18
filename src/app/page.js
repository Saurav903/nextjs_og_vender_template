"use client"
import Image from 'next/image'
// import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
  const [state,setState]=useState({
    title:"",
    description:"",
    width:1080,
    height:1320
  })


  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setState({...state,[name]:value})
  }

  console.log(state);
 
  return (
    <main>
      

     

      <div style={{display:"flex"}}>

        
        <div style={{flex:"5"}}>
        <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
        <input className='border border-gray-500' type='text' name='title' onChange={handleChange}/>
        <input className='border border-gray-500' type='text' name='description' onChange={handleChange}/>
        <button className='border border-gray-500' onClick={()=>setState({...state,width:1080,height:1350})}>Instagram</button>
        <button className='border border-gray-500' onClick={()=>setState({...state,width:1080,height:1920})}>Whatsapp</button>
        </div>

        <div style={{flex:"5"}}>
        <iframe style={{minWidth:"100%",minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center",border:"0px",borderRadius:"10px"}} src={`http://localhost:3000/api/og?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}`} allowFullScreen></iframe>
        </div>

      
      </div>

      


      {/* <Link href={`/api/og?title=have`}>button</Link> */}
    </main>
  )
}
