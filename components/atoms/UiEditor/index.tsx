import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import { useToasts } from 'react-toast-notifications'
import { PlusIcon } from '../icons/plusIcon'
interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
  name: string
}
export const UiEditor: React.FC<props> = ({ formData, setFormData, name }) => {
  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>
  })
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video'
  ]
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': ["olone"] }],
      [{ 'align': [] }],
    
      ['clean']         
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  }
  const { addToast } = useToasts()
  const [draftData, setdraftData] = useState('')
  const AddHandler = () => {
    if (draftData) {
      if (formData && formData['pages']) {
        setFormData({ ...formData, pages: [...formData['pages'], draftData] })
      } else {
        setFormData({ ...formData, pages: [draftData] })
      }
      setdraftData('')
    } else {
      addToast('Please add data', { appearance: 'warning', autoDismiss: true })
    }
  }

  return (
    <div className='px-2 py-2'>
      <button
        type='button'
        className="focus:outline-none"
        onClick={() => {
          AddHandler()
        }}
      >
         <PlusIcon className='text-secondary w-auto h-7' />
      </button>
      <QuillNoSSRWrapper
        value={draftData}
        theme='snow'
        modules={modules}
        onChange={(content: string) => {
          setdraftData(content)
        }}
        formats={formats}
      />
    </div>
  )
}
