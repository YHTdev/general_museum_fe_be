import React from 'react'
import {Editor} from 'draft-js'
import 'draft-js/dist/Draft.css';

interface props{
    editorState:Draft.DraftModel.ImmutableData.EditorState;
    setEditorState:React.Dispatch<React.SetStateAction<Draft.DraftModel.ImmutableData.EditorState>>
}
export const UiEditor:React.FC<props> =({editorState,setEditorState})=>{
    return(
        <div>
           <Editor  ariaMultiline placeholder='descrption...'   editorState={editorState} onChange={(value)=>{setEditorState(value)}}  />
        </div>
    )
}
