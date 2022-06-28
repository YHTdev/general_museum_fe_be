import { useRouter } from 'next/router';
import React from 'react'
import { Dispatch, SetStateAction } from "react";
import { PowerIcon } from '../../atoms/icons/powerIcon';
import { AppLogo } from '../../atoms/UiAppLogo'
import { UiDrawerButton } from '../../atoms/UiDrawerButton'

interface props{
  isOpen: boolean;
  setIsOpen : Dispatch<SetStateAction<boolean>>
}
export const NavBar:React.FC<props> = ({ isOpen, setIsOpen }) => {
  const { push } = useRouter()
  const Logout = () => {
    sessionStorage.clear()
    push('/')
  }
  return (
    <div className='w-full px-2 py-2 bg-secondary text-inverse'>
      <div className='flex w-full max-w-screen-2xl mx-auto justify-between items-center content-center'>
        <div className='flex justify-start space-x-4 items-center content-center'>
          <UiDrawerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {
            !isOpen &&  <AppLogo />
          }
        </div>

        <button
          onClick={() => {
            Logout()
          }}
          className='flex space-x-2 justify-center items-center content-center'
        >
            <PowerIcon className="w-auto h-6" />
          <span>ထွက်ရန်</span>
        </button>
      </div>
    </div>
  )
}
