import React from "react";
interface props{
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
    icon?:JSX.Element
}
export const UiInput:React.FC<props> =({formData,setFormData,inputProps,icon})=>{
    return(
        <div className=" px-2 py-2">
           
        <div className="flex border-secondary rounded-md border px-1 ">


            {icon}
            <input className='w-full flex justify-start items-center content-center px-2 py-2 focus:outline-none appearance-none' onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}  {...inputProps} />
            
            </div>

        </div>
    )
}