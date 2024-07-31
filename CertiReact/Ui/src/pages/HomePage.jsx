import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


const HomePage = () => {
const [id,setId]=useState('')

  return (
    <div className="bg-blue-100 h-[1000px]">
    <nav className="flex justify-end">
        <input type="button" value="Home" className="w-[200px] h-[50px] bg-blue-500 m-4 rounded-lg text-2xl text-white shadow-lg shadow-slate-600"/>
        <Link to="/issue"><input type="button" value="Issue Certificate" className="w-[200px] h-[50px] bg-slate-200 m-4 rounded-lg text-2xl shadow-lg shadow-slate-600"/></Link>
    </nav>
    <div className="flex justify-center ">
    <div className="text-center mt-16 border w-[500px] h-[600px] p-4 bg-blue-200 rounded-3xl shadow-lg shadow-black">
        <p className="text-5xl font-bold">Certificate Dapp</p>
        <div className=" flex justify-center mt-16">
        <img src={logo} alt="" className="w-[200px] h-[200px]"/>
        </div>
        <div className="mt-16">
            <input type="text" className="w-[400px] h-[50px] rounded-lg text-2xl border border-slate-300 shadow-lg p-4" value={id} onChange={(e)=>setId(e.target.value)}/>
            <Link to={`/view/${id}`}><input type="button" value="Search"className="w-[200px] h-[50px] bg-blue-500 m-4 rounded-lg text-2xl text-white shadow-lg shadow-slate-600"/></Link>
        </div>
    </div>
    </div>
    
</div>
  )
}

export default HomePage