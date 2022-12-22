import React from 'react'
import bootstrap from 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Home = () => {
  
  return (
    <div>
      <p className='top'>Welcome to SmartZone</p>
    <nav className='nav'>
    <div>EN<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /><input placeholder='select your language' id='lan'></input></div> 
    <div id="logo">SmartZone </div> 
    <div><button>Login</button><button>Sign-up</button></div> 
    </nav>
    <div >
       <form className='signup'> <h1>REGISTER</h1>
        <p>Firstname<input placeholder=' Enter your firstname'/></p><p>Lastname<input placeholder=' Enter your Lastname'/></p>
        <p>Email<input placeholder='Enter your email-address'/></p><p>Phonenumber<input placeholder='Enter your phonenumber' /></p> 
        <p>Password<input placeholder='Enteryourpassword'/></p><p>Confirm password<input placeholder='Confirm your password' /></p>
        <button>Register</button></form>
        
          </div>
          <div>
            
         
          </div>
    
    </div>
  )
}

export default Home

