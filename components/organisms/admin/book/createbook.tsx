import React, { Dispatch, useState } from "react";

import { UiEditor } from "../../../atoms/UiEditor";
import { UiFileInput } from "../../../atoms/UiFileInput";
import { UiInput } from "../../../atoms/UiInput";
import { UiSelectInput } from "../../../atoms/UiSelect";

import { UiSubmit } from "../../../atoms/UiSubmit";

interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>,
   
}
export const CreateBookForm:React.FC<props> =({formData,setFormData})=>{
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
          
           
            <UiEditor formData={formData} setFormData={setFormData} name='desc' />
            <UiSubmit title="Create"/>

        </div>
    )
}