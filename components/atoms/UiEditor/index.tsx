import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useToasts } from 'react-toast-notifications'
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
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
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
        onClick={() => {
          AddHandler()
        }}
      >
        add
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
