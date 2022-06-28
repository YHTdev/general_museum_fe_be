import React from 'react';
import HomePage from '../../../pages';

export const Login:React.FC = () => {
 
    return (
        <div className='bg-slate-200 w-full h-screen flex flex-col justify-center items-center'>
             <div className='bg-amber-500 p-6 rounded-2xl shadow-xl'> 
                <div className='flex flex-row justify-center'>
                    <img className='w-14 h-14 mb-2' src='https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-login-icon-button-126998484.jpg' alt='logo' />
                </div>
                {/* <p className='text-2xl mb-5 text-center'>Login</p> */}
                <form>
                    <div className='flex flex-col mb-7'>
                        <label className='mb-2'>Email address:</label>
                        <input className='bg-gray-200 border-2 border-blue-300 rounded-2xl pl-3 text-purple-800 w-96 h-10'  type='text' placeholder='Enter email' />
                    </div>
                    <div className="flex flex-col mb-7">
                        <label className='mb-2'>Password:</label>
                        <input className='bg-gray-200 border-2 border-green-300 rounded-2xl pl-3 text-purple-800 w-96 h-10'  type='text' placeholder='Enter password' />
                    </div>
                    <div className='text-center'>
                        <button className="bg-blue-500 text-gray-100 py-3 px-6 align-center rounded-full">Continue</button>
                    </div>
                    <p className='text-end mt-3'><span>Forget </span><span className='text-fuchsia-600'>password?</span></p>
                </form>y
            </div>
        </div>
    )
}