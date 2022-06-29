import React from 'react'
import { EditIcon } from '../../../atoms/icons/editIcon'
import { SaveIcon } from '../../../atoms/icons/SaveIcon'
import { UiButton } from '../../../atoms/UiButton'
import { UiFileInput } from '../../../atoms/UiFileInput'
import { UiInput } from '../../../atoms/UiInput'
import { UiMultiFileInput } from '../../../atoms/UiMultipleUpload'
import { settingProps } from '../../../templates/AdminLayout'

interface props {
  setting: settingProps
  setSetting: React.Dispatch<React.SetStateAction<any>>
  updateSettiing: (e: React.FormEvent) => void;
  isEdit:boolean;

  
}

export const SettingForm: React.FC<props> = ({
  setting,
  setSetting,
  updateSettiing,
  isEdit
}) => {
  return (
    <form onSubmit={e => updateSettiing(e)}>
      <div className='grid grid-cols-12 gap-3 w-full'>
        <div className='col-span-12'>
          <div className='w-full flex justify-end items-center content-center'>
            <button type='submit' className='px-2 py-2 rouend-md '>
              {
                !isEdit ? <SaveIcon className='text-secondary w-8 h-8'/>:<EditIcon className='text-secondary w-8 h-8' />
              }
            </button>
          </div>
        </div>
        <div className='col-span-4'>
          <span> App Logo </span>
        </div>
        <div className='col-span-8'>
          {
            isEdit ? <>
             <UiFileInput inputProps={{name:"logo",id:"logo"}}  setFormData={setSetting} formData={setting} />
            </>:<img
            className='w-24 h-24 border-primary border-opacity-30 rounded-md border px-2 py-2'
            src={setting.logo}
            alt='logo'
          />
          }
        </div>
        <div className='col-span-4'>
          <span> App Name </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiInput formData={setting} setFormData={setSetting} />:setting.appNm}</div>
        <div className='col-span-4'>
          <span> Address </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiInput formData={setting} setFormData={setSetting} />:setting.address}</div>
        <div className='col-span-4'>
          <span> Email </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiInput formData={setting} setFormData={setSetting} />:setting.email}</div>
        <div className='col-span-4'>
          <span> Description </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiInput formData={setting} setFormData={setSetting} />:setting.descrption}</div>
        <div className='col-span-4'>
          <span> Phone </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiInput formData={setting} setFormData={setSetting} />:setting.phone}</div>

        <div className='col-span-4'>
          <span> Slioders Images </span>
        </div>
        <div className='col-span-8'>{isEdit?<UiMultiFileInput inputProps={{name:"sliders",id:"sliders"}} formData={setting} setFormData={setSetting} />:<div>
           
          </div>}</div>
          <div className='col-span-4'>
          <span> Services Images </span>
        </div>
          <div className='col-span-8'>{isEdit?<UiMultiFileInput inputProps={{name:"services",id:"services"}} formData={setting} setFormData={setSetting} />:<div>
           
          </div>}</div>
      </div>
    </form>
  )
}
