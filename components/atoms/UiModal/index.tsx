import React, { Fragment,Dispatch,SetStateAction } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { CloseIcon } from '../icons/closeIcon'
interface props{
    isOpen:boolean
    setIsOpen:Dispatch<SetStateAction<boolean>>,
    children:any
    className:string
}
export const UiModal:React.FC<props> = ({ isOpen, setIsOpen, children,className }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
        
          onClose={() => {
            setIsOpen(!isOpen)
          }}
          open={isOpen}
          as='div'
          
          className='absolute inset-0 z-40 lg:overflow-y-auto'
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-700"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div
                className={`${
                  className || ""
                } flex mx-auto flex-col relative w-full max-w-5xl  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl`}>
                  <div className='w-full flex justify-end items-center content-center px-2 py-2'> 
                      <button className='appearance-none focus:outline-none' onClick={()=>setIsOpen(!isOpen)}>
                        <CloseIcon className="w-auto h-7 text-red-500" />
                      </button>
                  </div>
                {children}
               
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}