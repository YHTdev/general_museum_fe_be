import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { API } from '../../../lib/services'
import { UiDashboardHeader } from '../../atoms/UiDashboardHeader'
import { UiDrawer } from '../../atoms/UiDrawer'
import { NavBar } from '../NavBar'
import { SideNav } from '../SideNav'

interface props {
  children: JSX.Element
}
export interface settingProps {
  address: string
  appNm: string
  createdAt: string
  descrption: string
  email: string
  id: string
  logo: string
  map: string
  phone: string
  services: serviceProps[]
  sliders: sliderProps[]
}
interface serviceProps {
  id: string
  settingId: string
  src: string
  subTitle: string
  title: string
}

interface sliderProps {
  id: string
  settingId: string
  src: string
}

export const AppWrapper: React.FC<props> = ({ children }) => {
  const [setting, setSetting] = useState<settingProps>()
  const getSetting = useCallback(() => {
    API.get('/v1/setting')
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          if (res.data.data && res.data.data.length) {
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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full min-h-screen bg-inverse'>
      <NavBar setting={setting} isOpen={isOpen} setIsOpen={setIsOpen} />
      <UiDashboardHeader />
      <div className='w-full max-w-screen-2xl border-t-2 border-secondary rounded-t-md bg-inverse mx-auto px-2 py-2'>
        {children}
      </div>
      <UiDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SideNav setting={setting} />
      </UiDrawer>
    </div>
  )
}
