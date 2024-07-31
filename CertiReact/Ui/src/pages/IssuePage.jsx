import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const IssuePage = () => {
    const [course,setCourse]=useState("Certified Blockchain Associate")
    const[certId,setCertId]=useState('')
    const [name,setName]=useState('')
    const [grade,setGrade]=useState("S")
    const [date,setDate]=useState('')
    const navigate=useNavigate()
    const addCertificate= async(e)=>{
        e.preventDefault()
        const newCert={
            course,
            certId,
            name,
            grade,
            date
            }
            try{
            const response=await fetch("http://localhost:5000/issue",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                    },
                    body:JSON.stringify(newCert)
            })
            const data=await response.json()
            console.log(data)
            toast.success("Certificate issued ")
            navigate("/")
        }catch(err){
            toast.error("error in issueing certificate")
        }
            }
        
    
  return (
    <>
    < div className="bg-blue-100 h-[1000px]">
    <nav className="flex justify-end">
        <Link to="/"><input type="button" value="Home" className="w-[200px] h-[50px] m-4 rounded-lg bg-slate-200  text-2xl shadow-lg shadow-slate-600"/></Link>
        <input type="button" value="Issue Certificate" className="w-[200px] h-[50px]  bg-blue-500 text-white  m-4 rounded-lg text-2xl shadow-lg shadow-slate-600"/>
    </nav>
    <p className="text-center text-5xl font-bold text-slate-600">Certificate DApp</p>
    <div className="flex justify-center ">
    <div className="flex justify-center mt-16 border w-[600px] h-[730px] p-4 bg-blue-200 rounded-3xl shadow-lg shadow-black">
    <form className="space-y-7 mt-4 mb-4" onSubmit={addCertificate}>
    <p className="text-3xl font-bold text-slate-600">Issue New Certificate</p>
    <div className="flex flex-col">
                <label className="text-l">Select Course</label>
                <select name="course" id="d" className="w-[450px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 pl-4  bg-white"
                value={course}
                onChange={(e)=>setCourse(e.target.value)}>
                    <option value="course">Certified Blockchain Associate</option>
                    <option value="course">Blockchain Foundation Program</option>
                    <option value="course">Developer Essentials For Blockchain</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-xl">Certificate Id</label>
                <input type="text" className="w-[450px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 p-4"
                required
                value={certId}
                onChange={(e)=>setCertId(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label className="text-xl">Candidate Name</label>
                <input type="text" className="w-[450px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 p-4"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label className="text-xl">Grade</label>
                <select name="course" id="c" className="w-[450px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 pl-4 bg-white"
                value={grade}
                onChange={(e)=>setGrade(e.target.value)}>
                    <option value="grade">S</option>
                    <option value="grade">A</option>
                    <option value="grade">B</option>
                    <option value="grade">C</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-xl">Issue Date</label>
                <input type="date" name="" id=""className="w-[450px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 p-4"
                value={date}
                onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Issue Certificate" className="w-[200px] h-[50px] rounded-lg text-xl border border-slate-300 shadow-lg shadow-slate-600 bg-blue-500"/>
            </div>
    </form>
    </div>
    </div>
    </div>
</>
  )
}

export default IssuePage