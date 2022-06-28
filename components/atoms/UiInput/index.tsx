import React from "react";
interface props{
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>
}
export const UiInput:React.FC<props> =({formData,setFormData,inputProps})=>{
    return(
        <div className="w-full px-2 py-2">
            <input className='w-full flex justify-start items-center content-center px-2 py-2 focus:outline-none appearance-none border-secondary rounded-md border' onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}  {...inputProps}  />
        </div>
    )
}