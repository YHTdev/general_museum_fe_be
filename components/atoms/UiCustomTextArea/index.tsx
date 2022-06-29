import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { PlusIcon } from "../icons/plusIcon";
interface props{
    inputProps?:React.InputHTMLAttributes<HTMLTextAreaElement>;
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>
}
export const UiCustomTextArea:React.FC<props> =({inputProps,formData,setFormData})=>{
    const {addToast} = useToasts()
     const [draftData, setDraftData] = useState("")
     const [draftDataArray, setdraftDataArray] = useState<string[]>([])
      const AddText =()=>{
        if(draftData){
           setdraftDataArray([...draftDataArray,draftData])
           setDraftData("")
          
           setFormData({...formData,"pages":draftDataArray.join(",")})
        }
        else{
            addToast("Please add data",{appearance:'warning',autoDismiss:true})
        }
      }
    return(
        <div className="px-2 py-2 flex flex-col space-y-2">

            <div className="w-full flex justify-end space-x-6 item-center content-center">
            <div className="flex justify-start items-center content-center space-x-5">
                <span className="text-primary text-opacity-70">No. of Page</span>
                <span className="text-secondary text-opacity-70"> ({draftDataArray.length})</span>
            </div>
            <button onClick={()=>AddText()} className='appearance-none focus:outline-none px-2 py-2'>
                <PlusIcon className="w-8 h-8 text-secondary" />
             </button>
            </div>
            <textarea onChange={(e)=>{setDraftData(e.target.value)}} value={draftData} spellCheck  rows={20}  className="w-full border focus:outline-none px-2 py-2 border-secondary rounded-md appearance-none " {...inputProps} />
             
        </div>
    )
}