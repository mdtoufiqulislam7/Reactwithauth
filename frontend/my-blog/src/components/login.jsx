import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username,setusername]=useState(null)
    const [password,setpassword]=useState(null)

    const loginnow=async()=>{
        try {
            const response =await axios.post('http://127.0.0.1:8000/login/',{
                'username': username,
                'password': password
            });
            // console.log(response.data,'asdfasseesdfasddd')
            window.localStorage.setItem('token',response.data['token'])
            window.location.href = '/profile';

            
        } catch (error) {

            alert('you password and username is invalid')
            console.error('Error fetching login:', error)
        }
    }

  return (
    <div className="container">
    <div class="content-section">
        <fieldset class="form-group">
            <legend class="border-bottom mb-4">Log In</legend>
            <div>
                <div class="form-group">
                    <label >Username</label>
                    <input type="text"  class="form-control" placeholder="Username" onChange={(e)=>setusername(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input  type="password" class="form-control" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
                </div>
            </div>
        </fieldset>
        <div class="form-group">
            <p class="btn btn-outline-info" onClick={loginnow} >Login</p>
        </div>
        <div class="border-top pt-3">
            <small class="text-muted">
                Need An Account?
                            <Link class="ml-2" to="/register/">SignIn Up Now</Link>
            </small>
        </div>
    </div>
</div >
  )
}
