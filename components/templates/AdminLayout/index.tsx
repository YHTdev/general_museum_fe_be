import React, { useState } from 'react'
import { PowerIcon } from '../../atoms/icons/powerIcon';
import { AppLogo } from '../../atoms/UiAppLogo';
import { UiDashboardHeader } from '../../atoms/UiDashboardHeader';
import { UiDrawer } from '../../atoms/UiDrawer';
import { NavBar } from '../NavBar'

interface props{
    children:JSX.Element
}

export const AppWrapper:React.FC<props> =({children})=>{
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div className='w-full min-h-screen bg-inverse'>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <UiDashboardHeader/>
             <div className='w-full max-w-screen-2xl border-t-2 border-secondary rounded-t-md bg-inverse mx-auto px-2 py-2'>
                {children}
             </div>
             <UiDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <AppLogo></AppLogo>

                <div className='flex justify-around items-center'>
                <PowerIcon className="w-7 h-7 my-5 mx-5"/><span>Book</span>
                </div>
                <div className='flex justify-around items-center'>
                <PowerIcon className="w-7 h-7 my-5 mx-5"/><span>Book</span>
                </div>
                <div className='flex justify-around items-center'>
                <PowerIcon className="w-7 h-7 my-5 mx-5"/><span>Book</span>
                </div>
             </UiDrawer>
        </div>
    )
}