import React, { Dispatch } from "react";
import { UiFileInput } from "../../../atoms/UiFileInput";
import { UiInput } from "../../../atoms/UiInput";
import { UiSelectInput } from "../../../atoms/UiSelect";
import { UiSubmit } from "../../../atoms/UiSubmit";
import { UiTextarea } from "../../../atoms/UiTextarea";
interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>
}
export const BookEditForm:React.FC<props> =({formData,setFormData})=>{
    console.log(formData,"formData")
    return(
        <div>
            <UiInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"name",id:'name',value:formData.name}}
                
            />
            <UiSelectInput
                formData={formData}
                setFormData={setFormData}
                name="categoryId"
                id="categoryId"
                
             />
            <UiFileInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"cover",id:"cover"}}
            />
            <UiTextarea 
                formData={formData}
                setFormData={setFormData}
                name="pages"
                id="pages"
            />
            <UiSubmit title="Edit"/>
        </div>
    )
}