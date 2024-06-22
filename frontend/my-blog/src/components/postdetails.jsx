import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseStateValue } from '../state/stateProvider'
export default function Postdetails() {
    const [{profile},dispatch]= UseStateValue()
    
    const {id} = useParams()
    const [post,setpost]= useState(null)
    useEffect(()=>{

        const postdetails =async()=>{
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/blogdata/${id}/`,{
                    headers: {
                        Authorization: `token ${window.localStorage.getItem('token')}`
                    }
                }
            )
                setpost(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('errer the code',error)
                
            }

        }
      postdetails()
    },[id])
  return (

    <div>
        
        {
            post !== null ?(
                <>
                <div className="container">
    <article className="media content-section">
        <img className="rounded-circle article-img" src={`http://127.0.0.1:8000${post?.user?.image}/`} alt='User'/>
        <div className="media-body">
            <div className="article-metadata">
                <a className="mr-2" href='/' >Username: {post?.user?.user?.username}</a>
                <small className="text-muted">{post?.date}</small>
            {
                profile?.['id']=== post?.user?.id && (
                    <div>
                    <Link class="btn btn-secondary btn-sm mt-1 mb-1" >Update</Link>
                    <Link class="btn btn-danger btn-sm mt-1 mb-1" >Delete</Link>
                </div>
                )
            }

            </div>
            <h2 className="article-title">{post?.title}</h2>
            <img className="article_content_image" src={post?.image} alt="" style={{width:'500px'}} />
            <p className="article-content">{post?.description}</p>
        </div>
    </article>

</div>
                </>
            ):(
                <h1>please login first </h1>
            )
        }
    </div>
  )
}
