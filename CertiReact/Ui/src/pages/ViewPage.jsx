import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { useParams } from 'react-router-dom'


const ViewPage = () => {
const {id}=useParams()
console.log(id)
  const [certs,setCerts]=useState({})

useEffect(()=>{
  const certificate=async()=>{
    const res=await fetch(`http://localhost:5000/view/${id}`)
    if(!res.ok)return("not good")
    const data=await res.json()
    //console.log(data);
    setCerts(data)

  };certificate();
},[])

  return (
    <div className="bg-blue-100 h-[1000px]">
    <div className="text-5xl font-bold text-center pt-8">
        <p>Kerala Blockchain Academy</p>
    </div>
    <div className="flex justify-center ">
    <div className="text-center mt-16 border w-[500px] h-[700px] p-4 bg-blue-200 rounded-3xl shadow-lg shadow-black">
        <div className=" flex justify-center mt-16">
        <img src={logo} alt="" className="w-[200px] h-[200px]"/>
        </div>
        <div className="mt-16">
            <p className="text-2xl text-justify p-4">{`This is to certify that ${certs.name} has successfully completed ${certs.course} course with grade ${certs.grade} on ${certs.date}`}</p>
        </div>
    </div>
    </div>
    
</div>
  )
}

export default ViewPage