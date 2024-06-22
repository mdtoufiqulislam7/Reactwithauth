import Axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [password2,setpassword2] = useState('')

    const navigate = useNavigate()

    const registernow=()=>{
        if( password === password2){
            Axios({
                method : 'post',
                url: 'http://127.0.0.1:8000/register/',
                data:{
                    username :username,
                    password: password,
                }
            }).then(response=>{
                alert('user succesfully created')
                navigate('/')
            })

        }else{
            alert('your password not match')
        }
    }
  return (
    <div className="container">
    <div class="content-section">
        <fieldset class="form-group">
            <legend class="border-bottom mb-4">Register Now</legend>
            <div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Username" onChange={(e)=>setusername(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password"  class="form-control" placeholder="Password"onChange={(e)=>setpassword(e.target.value)} />
                </div>

                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password"  class="form-control" placeholder="Password" onChange={(e)=>setpassword2(e.target.value)}/>
                </div>
            </div>
        </fieldset>
        <div class="form-group">
            <p class="btn btn-outline-info"  onClick={registernow}  >Register</p>
        </div>
        <div class="border-top pt-3">
            <small class="text-muted">
                Have An Account?
                            <Link class="ml-2" to="/">SignIn In Now</Link>
            </small>
        </div>
    </div>
</div >
  )
}
