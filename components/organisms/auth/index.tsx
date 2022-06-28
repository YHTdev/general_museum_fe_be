import React from 'react'
import { EmailIcon } from '../../atoms/icons/email'
import { LockIcon } from '../../atoms/icons/lock'
import { UiButton } from '../../atoms/UiButton'
import { UiInput } from '../../atoms/UiInput'

interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
}

export const LoginForm: React.FC<props> = ({ formData, setFormData }) => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center content-center bg-slate-200'>
      <div className='w-full max-w-screen-sm bg-white px-2 py-2 rounded-md'>
        <UiInput
          formData={formData}
          setFormData={setFormData}
          icon={<EmailIcon className='text-yellow-600 m-4' />}
          inputProps={{
            type: 'email',
            required: true,
            placeholder: 'အီးမေးလ်လိပ်စာထည့်ပါ..',
            name: 'email',
            id: 'email',
            autoFocus:true
            
            
          }}
        />

        <UiInput
          formData={formData}
          setFormData={setFormData}
          icon={<LockIcon className='text-yellow-600 m-4' />}
          inputProps={{
            type: 'password',
            required: true,
            placeholder: 'စကားဝှက်ထည့်သွင်းပါ..',
            name: 'password',
            id: 'password'
          }}
        />
        <UiButton buttonProps={{type:'submit'}}>
          <span>
           ဝင်ရောက်ရန်
          </span>
        </UiButton>
      </div>
    </div>
  )
}
