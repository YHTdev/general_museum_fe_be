import { each } from 'lodash'
import React from 'react'
interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  icon?: JSX.Element
}
export const UiFileInput: React.FC<props> = ({
  formData,
  setFormData,
  inputProps,
  icon
}) => {
  const SubmitFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    let files = e.target.files
   
    let fileReader = new FileReader();
    if(files){
        fileReader.readAsDataURL(files[0])
        fileReader.onload=(event)=>{
           console.log(event.target?.result)
            setFormData(event.target?.result)
        }
    }
   
  }
  return (
    <div className=' px-2 py-2'>
      <div className='flex border-secondary rounded-md border px-1 '>
        {icon}
        <input
          multiple
          type='file'
          className='w-full flex justify-start items-center content-center px-2 py-2 focus:outline-none appearance-none'
          onChange={e => {
            SubmitFileHandler(e)
          }}
          {...inputProps}
        />
      </div>
    </div>
  )
}
