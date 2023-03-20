import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { getPostSuccess } from '../Redux/action'
import { useToast } from '@chakra-ui/react'
import EditModal from './EditModal'

const CRUD = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const data = useSelector((store) => store.isPost)
const handleDelete=(id)=>{
    axios.delete(`https://elated-ray-hosiery.cyclic.app/post/${id}`)
    .then((res)=>{
        toast({
            title: 'Post Deleted.',
            description: "Your Post has been Trashed.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        axios.get(`https://elated-ray-hosiery.cyclic.app/post/`)
        .then((res)=>{
            dispatch(getPostSuccess(res.data))
        
        })
    
    })
    .catch((err)=>{
       console.log(err)
    })
}

  return (
    <div className='mt-4 '>
        {
            data && data.map((el, index)=>{
                return <div key={index} className="border border-5 border-primary mt-4 w-50 m-auto p-3" >
                    <h1><b>{el.Title}</b></h1>
                    <h3>Category:<i> <b>{el.Category}</b></i></h3>
                    <p><b>Description</b>:<i>{el.Description}</i> </p>
                    <p>{el.Date}</p>
                   <EditModal data={el} />
                   
                    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(el._id)}>Delete</button>
                </div>
            })
            
        }
    
    </div>
  )
}

export default CRUD