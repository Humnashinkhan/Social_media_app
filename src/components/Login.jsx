import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../utils/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

         const signupWithGoogle = () =>{
           signInWithPopup(auth, provider);
    
     };
    
  return (
    <div>
        <div className="">
        <img 
         className='h-[60vh] w-full'
         alt="bg"
         src="https://pfpmaker.com/images/ai/hero-bg.png"
         />
    </div>
        <div className="">
        <h1 className='text-center mt-5 font-semibold text-[35px]'>
        <FontAwesomeIcon icon={faCamera} className="px-2"/>
           Vibesnap
        </h1>
         <p className='text-center font-medium text-[22px] pt-2'>Moments That Matter, Shared Forever.</p>
          <button
           className="mt-10 text-white bg-black px-12 py-4 rounded-full ml-16 font-bold" 
           onClick={signupWithGoogle}>
           <FontAwesomeIcon icon={faGoogle} className="text-[#EA4335] px-2 h-5" />
            Continue with Google
        </button>
      </div>
    </div>
  )
}

export default Login