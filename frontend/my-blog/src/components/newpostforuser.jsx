import axios   from 'axios'
import React, { useState } from 'react'

export default function Newpostforuser() {
    const [title,settitle] = useState(null)
    const [description,setdescription] = useState(null)
    const [image,setimage] = useState(null)

    const newpostnow =async()=>{

        let formfiled = new FormData()
        formfiled.append('title',title)
        formfiled.append('description',description)

        if (image !== null) {
            formfiled.append('image',image)
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/blogdata/',formfiled,{

            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`
            }
            } )
            console.log(response.data)
            window.location.href = '/'

        } catch (error) {
            console.error('errer the code',error)
            
        }

    }



  return (
    
<div className="container">
    <div class="form-group">
        <label >Title</label>
        <input type="text" class="form-control" placeholder="Post title" onChange={(e)=>settitle(e.target.value)} />
    </div>
    <div class="form-group">
        <label >Description</label>
        <textarea  placeholder="Description" class="form-control" rows="3" onChange={(e)=>setdescription(e.target.value)} ></textarea>
    </div>
    <div class="form-group">
        <label >Image</label>
        <input  type="file" class="form-control" onChange={(e)=>setimage(e.target.files[0])} />
    </div>
    <button  className="btn btn-info" onClick={newpostnow} >New Post</button>
</div>
  )
}
