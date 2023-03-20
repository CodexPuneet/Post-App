import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { getPostSuccess } from '../Redux/action'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody,useDisclosure, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from '@chakra-ui/react'

const EditModal = ({data}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const toast = useToast()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [blog, setBlog]=React.useState({
        Title:data.Title,
        Description:data.Description,
        Category:data.Category,
    })
    
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setBlog({
            ...blog,
            [name]:value,
        })
    }
    const handleEdit=(id)=>{
  
        axios.patch(`https://elated-ray-hosiery.cyclic.app/post/${id}`,blog)
        .then((res)=>{
            onClose()
            toast({
                title: 'Post Edited.',
                description: "Your Post has been Edited.",
                status: 'warning',
                duration: 5000,
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
    <div>
        <Button class="btn btn-warning" onClick={onOpen}>Edit</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Your Post Now !</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} type='text' value={blog.Title}  placeholder='Title' name={'Title'} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description' type='text' value={blog.Description} name={'Description'} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <select name='Category' value={blog.Category} onChange={handleChange}> 
        <option value={'Food'}>Food</option>
        <option value={'Educations'}>Educations</option>
        <option value={'Businessmen'}>Businessmen</option>
        <option value={'Positions'}>Positions</option>
       </select>
             
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button class="btn btn-warning"  mr={3} onClick={()=>handleEdit(data._id)}>
              Edit
            </Button>
            <Button class="btn btn-danger" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default EditModal