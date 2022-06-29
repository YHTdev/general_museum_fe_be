import { NextPage } from 'next'
import { useState } from 'react'
import { UiFileInput } from '../../../components/atoms/UiFileInput'
import { AppWrapper } from '../../../components/templates/AdminLayout'

const SettingAdmin: NextPage = () => {
  const [formData, setformData] = useState({
    src:""
  })
  console.log(formData)
  return (
    <AppWrapper>
      <div>
        <UiFileInput formData={formData} setFormData={setformData} inputProps={{name:"src",id:"src"}} />
      </div>
    </AppWrapper>
  )
}

export default SettingAdmin
