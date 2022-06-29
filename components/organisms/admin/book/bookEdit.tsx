import React, { Dispatch } from "react";
import { UiInput } from "../../../atoms/UiInput";
import { UiSubmit } from "../../../atoms/UiSubmit";
interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>
}
export const BookEditForm:React.FC<props> =({formData,setFormData})=>{
    return(
        <div>
            <UiInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"name",id:'name'}}
                
            />
            <UiSubmit title="Edit"/>
        </div>
    )
}