import React from 'react'
import GoogleLogin from 'react-google-login'
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/bleach.mp4';
import logo from '../assets/bl.png';
export default function Login() {
  const responseGoogle = (response)=>{
    console.log(response);
  }
  return (
    <div className= "flex justify-start items-center flex-col h-screen">
      <div className='relative w-full h-full opacity-90'>

        <video src={shareVideo}
          type="video/mp4"
          loop
 
          controls={false}
          autoPlay 
          className='w-full h-full object-cover'
          
        />
        <div className='absolute flex flex-col justify-center items-center top-10  right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width ='350px' className='rounded-lg hover:bg-black' alt="logo"/>
          </div>
          <div className="shadow-2xl">
            <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps)=>(
              <button type="button" 
              className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none 
              mt-6 hover:bg-black hover:text-red-600 hover:border-2 hover:border-red-700" 
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
               <FcGoogle className='mr-4'/>Sign in with Google
              </button>
              
          )  }
          onSuccess = {responseGoogle}
          onFailure = {responseGoogle}
          cookiePolicy = "single_host_origin"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
} 
