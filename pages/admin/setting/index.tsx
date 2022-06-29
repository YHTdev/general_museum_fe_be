import { NextPage } from 'next'
import { useState } from 'react'
import { UiFileInput } from '../../../components/atoms/UiFileInput'
import { AppWrapper } from '../../../components/templates/AdminLayout'

const SettingAdmin: NextPage = () => {
  const [file, setFile] = useState({
    src:""
  })
  console.log(file)
  return (
    <AppWrapper>
      <div>
        <UiFileInput formData={file} setFormData={setFile} inputProps={{name:"src",id:"src"}} />
      </div>
    </AppWrapper>
  )
}

export default SettingAdmin
