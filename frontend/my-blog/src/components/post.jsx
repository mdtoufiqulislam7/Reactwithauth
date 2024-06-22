
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Singlepost from './singlepost'

export default function Postdata() {
    const [posts,setpost]= useState([])

    useEffect(()=>{
        const getpost = async()=>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogdata/',{
                    headers: {
                        Authorization: `token ${window.localStorage.getItem('token')}`
                    }
                }
                
            )
                setpost(response.data)
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        }
      getpost()
    },[])
    
  return (
    <div>
        {
            posts !== null ? (
                <>
                {
                    posts.map((data,idx)=>(
                        <Singlepost post={data} key={idx}/>
                    ))
                }
                </>
            ): (<h1> no data </h1>)
        }
    </div>
  )
}
