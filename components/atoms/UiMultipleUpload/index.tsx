import React from 'react'

interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  icon?: JSX.Element;
  multiple?:boolean
}
export const UiMultiFileInput: React.FC<props> = ({
  formData,
  setFormData,
  inputProps,
  icon,
  multiple=true
}) => {

   
  
  const SubmitFileHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    let allfiles:any[] = [];
    if(files){
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload =()=>{
          let fileInfo ={
            name:file.name,
            type:file.type,
            size:Math.round(file.size/1000)+'kb',
            src:reader.result
          }
          allfiles.push(fileInfo);
          
        }
      }
    }
    setFormData({...formData,[e.target.name]:allfiles})
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
