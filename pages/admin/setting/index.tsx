import { each } from 'lodash'
import { NextPage } from 'next'
import React, { useCallback, useEffect, useState } from 'react'
import { SettingForm } from '../../../components/organisms/admin/setting/SettingForm'

import {
  AppWrapper,
  settingProps
} from '../../../components/templates/AdminLayout'
import { API } from '../../../lib/services'

const SettingAdmin: NextPage = () => {
  const [setting, setSetting] = useState<settingProps>({
    id: '',
    appNm: '',
    address: '',
    descrption: '',
    services: [],
    sliders: [],
    createdAt: '',
    email: '',
    map: '',
    phone: '',
    logo: ''
  })
  
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const updateSetting = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEdit(!isEdit)
    try {
      if (isEdit === false) {
        API.put('/v1/admin/setting',setting).then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSetting = useCallback(() => {
    API.get('/v1/setting')
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          if (res.data.data) {
            setSetting(res.data.data[0])
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    getSetting()
  }, [getSetting])

  console.log(setting)

  return (
    <AppWrapper>
      <>
        {setting && (
          <SettingForm
            isEdit={isEdit}
            updateSettiing={updateSetting}
            setting={setting}
            setSetting={setSetting}
          />
        )}
      </>
    </AppWrapper>
  )
}

export default SettingAdmin
