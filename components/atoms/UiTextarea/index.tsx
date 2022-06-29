import React from "react";
import { PlusIcon } from "../icons/plusIcon";
import { UiButton } from "../UiButton";
interface props{
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>;
    id:string;
    name:string;
}
export const UiTextarea: React.FC<props> = ({
    formData,
    setFormData,
    id,
    name
    
  }) => {
    return(
        <div className="grid grid-cols-12 border-secondary rounded-md border mx-2 ">
           <div className="col-span-11">
            <textarea
                id={id}
                name={name} 
                
                onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
                className="w-full flex justify-start items-center content-center px-2 py-2 focus:outline-none appearance-none"/>
                
           </div>
             <div className="col-span-1">
                <button className=' py-2 focus:outline-none'>
                    <PlusIcon className='text-secondary w-auto h-7' />
                </button>
             </div>
        </div>
    )
}