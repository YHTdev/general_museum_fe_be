import React, { Dispatch, useState } from "react";
import { UiCustomTextArea } from "../../../atoms/UiCustomTextArea";
import { UiEditor } from "../../../atoms/UiEditor";
import { UiFileInput } from "../../../atoms/UiFileInput";
import { UiInput } from "../../../atoms/UiInput";
import { UiSelectInput } from "../../../atoms/UiSelect";

import { UiSubmit } from "../../../atoms/UiSubmit";

interface props{
    formData:any
    setFormData:Dispatch<React.SetStateAction<any>>,
    editorState:Draft.DraftModel.ImmutableData.EditorState,
    setEditorState:React.Dispatch<React.SetStateAction<Draft.DraftModel.ImmutableData.EditorState>>
}
export const CreateBookForm:React.FC<props> =({formData,setFormData,editorState,setEditorState})=>{
    console.log(editorState,"editor State")
   
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
            {/* <UiCustomTextArea 
                formData={formData} 
                setFormData={setFormData}
                inputProps={{id:"pages",name:"pages"}}
            /> */}
           
            <UiEditor editorState={editorState} setEditorState={setEditorState} />
            <UiSubmit title="Create"/>

        </div>
    )
}