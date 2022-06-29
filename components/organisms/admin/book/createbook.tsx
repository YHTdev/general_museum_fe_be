import React, { Dispatch, useState } from "react";
import { UiCustomTextArea } from "../../../atoms/UiCustomTextArea";
import { UiFileInput } from "../../../atoms/UiFileInput";
import { UiInput } from "../../../atoms/UiInput";
import { UiSelectInput } from "../../../atoms/UiSelect";
import { UiSubmit } from "../../../atoms/UiSubmit";
import { UiTextarea } from "../../../atoms/UiTextarea";
interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>
}
export const CreateBookForm:React.FC<props> =({formData,setFormData})=>{
    const [tempData, setTempData] = useState<string>("")
    console.log(formData,"formData")
    return(
        <div>
            <UiInput
                formData={formData}
                setFormData={setFormData}
                inputProps={{name:"name",id:'name'}}
                
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
            <UiCustomTextArea 
                formData={formData} 
                setFormData={setFormData}
                inputProps={{id:"pages",name:"pages"}}
            />
            <UiSubmit title="Create"/>
        </div>
    )
}