import React, { useState } from 'react'
import { NavBar } from '../NavBar'

interface props{
    children:JSX.Element
}

export const AppWrapper:React.FC<props> =({children})=>{
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div className='w-full min-h-screen bg-slate-100'>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
             <div className='w-full max-w-screen-2xl border-t-2 border-indigo-300 rounded-t-md bg-white mx-auto px-2 py-2'>
                {children}
             </div>
        </div>
    )
}