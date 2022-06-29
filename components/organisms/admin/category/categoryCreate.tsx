import React, { Dispatch } from "react";
import { UiFileInput } from "../../../atoms/UiFileInput";
import { UiInput } from "../../../atoms/UiInput";
import { UiSubmit } from "../../../atoms/UiSubmit";
interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>
   
}
export const CategoryCreateForm:React.FC<props> =({formData,setFormData})=>{
    return(
        <div>
            <UiInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"name",id:'name',value:formData.name}}
                
            />
             <UiFileInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"cover",id:"cover"}}
            />
            <UiSubmit title="Create"/>
        </div>
    )
}