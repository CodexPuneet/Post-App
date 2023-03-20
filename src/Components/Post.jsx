import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getPostRequest, getPostSuccess, getPostError } from '../Redux/action'
import { Select, useToast } from '@chakra-ui/react'

const Post = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const [blog, setBlog]=useState({
        Title:"",
        Description:"",
        Category:"",
        Date:"",
    })

    const handleChange=(e)=>{
    const {name, value}=e.target;
    setBlog({
        ...blog,
        [name]:value,
    })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`https://elated-ray-hosiery.cyclic.app/post/create`,blog)
        .then((res)=>{
            toast({
                title: 'Posted Sucessfully.',
                description: "We're posting your post. Please Wait..",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
         handleData()
        })

    }
    const handleData=()=>{
        dispatch( getPostRequest())
        axios.get(`https://elated-ray-hosiery.cyclic.app/post/`)
        .then((res)=>{
            dispatch(getPostSuccess(res.data))
        
        })
        .catch((err)=>{
            getPostError(err)
        })

    }
    const handleSort = (e)=>{
        axios.get(`https://elated-ray-hosiery.cyclic.app/post/sort?order=${e}`)
        .then((res)=>dispatch(getPostSuccess(res.data)))
      }
    useEffect(()=>{
        handleData()
    },[])
 
  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Create Post
</button>
<Select w="50%" m='auto' onChange={(e)=>handleSort(e.target.value)}>
              <option value="">Date</option>
              <option value="desc">Recent</option>
              <option value="asc">Oldest</option>
            </Select> 
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create a new Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="w-50 p-4 m-auto">
      <input required type='text' name='Title'  placeholder='Title' onChange={handleChange}/>
       <input required type='text' name='Description'  placeholder='Description' onChange={handleChange}/>
       <input required type='Date' name='Date' placeholder='Date' onChange={handleChange}/>
       <select required name='Category' onChange={handleChange}> 
       <option value="">Category</option>
        <option value={'Food'}>Food</option>
        <option value={'Educations'}>Educations</option>
        <option value={'Businessmen'}>Businessmen</option>
        <option value={'Positions'}>Positions</option>
       </select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type='submit'className="btn btn-primary" >Post</button>
      </div>
      </form>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Post