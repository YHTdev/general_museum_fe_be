import React from 'react'
interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  icon?: JSX.Element
}
export const UiMultiFileInput: React.FC<props> = ({
  formData,
  setFormData,
  inputProps,
  icon
}) => {

   
  
  const SubmitFileHandler = (e:any) => {
    let images = e.target.files;
   if(images){
    for (const file of images) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormData({...formData,[e.target.name]:[[...formData[e.target.name], reader.result]]});
        };
        reader.onerror = () => {
          console.log(reader.error);
        };
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
