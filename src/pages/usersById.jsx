import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FileBase64 from 'react-file-base64';
import { Button } from '@mui/material';


const UsersById = () => {
    const params = useParams();
    const api = "https://66a27283967c89168f2022db.mockapi.io/Api/v1/Users"
    const [data,setData]=useState({})
    async function get(){
        try {
            const {data}= await axios.get(`${api}/${params.id}`)
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(data)
    const [file, setFile] = useState(null);
    const handleFileChange =(event)=>{
        setFile(event.base64);
    }
    const handleSave = async ()=>{
        try {
             await axios.put(`${api}/${params.id}`, { Avatar:file})
             console.log('User updated successfully')
             get()
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        get()
    },[])
  return (
    <div>
        <div className='py-[50px]'>
            <h1 className='text-center text-[48px]'>User Info</h1>
        </div>
        <div className='flex w-[70%] m-auto justify-center items-center gap-[20px]'>
            <div>
             <FileBase64 onDone={ handleFileChange } />
             <img src={file} alt="" className='w-[fit-content]' />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[32px]'>Name: {data.Name}</h2>
                <h2 className='text-[32px]'>JobCategory:{data.JobCategory}</h2>
                <h2 className='text-[32px]'>JobName:{data.JobName}</h2>
            </div>
        </div>
        <div className='text-center py-[20px]'>
            <Button size='large' variant='contained' onClick={handleSave}>Save User Img</Button>
        </div>
    </div>
  )
}

export default UsersById