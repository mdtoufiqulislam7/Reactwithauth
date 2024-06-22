import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home'
import Postdetails from './postdetails'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Profile from './profile';
import { UseStateValue } from '../state/stateProvider';
import Login from './login';
import Register from './register';
import Newpostforuser from './newpostforuser';
function Navbarr() {
  const [{profile},dispatch] =UseStateValue()
  const logoutnow =()=>{
    window.localStorage.clear()
    window.location.href = '/'
  }
  useEffect(() => {
    const getProfile = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/profile/', {
                headers: {
                    Authorization: `token ${window.localStorage.getItem('token')}`
                }
            });

            
            dispatch({
              type:'ADD_PROFILE',
              value:response.data['username']
            })
            // Ensure the response data structure matches what you expect
            
        } catch (error) {
            console.error('Error fetching profile:', error);
            dispatch({
              type:'ADD_PROFILE',
              value:null
            })
        }
    };

    getProfile();
    
}, [dispatch]);
  return (
    <Router>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' >My Blog Post</Navbar.Brand>
          <Nav className="me-auto">
            {
              profile !==null ?(
                <>
                <Nav.Link as={Link} to='addpost'>New Post</Nav.Link>
                <Nav.Link as={Link} to='/profile' >Profile</Nav.Link>
                <Nav.Link  onClick={logoutnow} >Logout</Nav.Link>
                </>
              ):(
               <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link  as={Link} to='/register'>Register</Nav.Link>
               </>
              )
            }
           
            
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {
          profile !==null ? (
            <>
            <Route exact path='/' Component={Home} />
            <Route exact path='/:id/' Component={Postdetails} />
            <Route exact path='/addpost' Component={Newpostforuser} />
            <Route exact path='/profile' Component={Profile} />
            

           </>
          )
         :(
          <>
          <Route exact path='/' Component={Login} />
          <Route exact path='/:id/' Component={Postdetails} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
          </>
         )
          
        }
       
        
      </Routes>
    </Router>


  )}  

export default Navbarr;