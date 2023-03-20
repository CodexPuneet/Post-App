import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPostSuccess } from '../Redux/action'

const Navbar = () => {
  const [data, setData]=useState("")
  const dispatch = useDispatch()
  const handleSearch=(e)=>{
    e.preventDefault()
    axios.get(`https://elated-ray-hosiery.cyclic.app/post/search/${data}`)
    .then((res)=>dispatch(getPostSuccess(res.data)))
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" >
    <h1 className="navbar-brand" >Cuneiform Blog</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
      </ul>
      <form className="d-flex" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" onChange={(e)=>setData(e.target.value)} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar