import { PrismaClient } from '@prisma/client'
import { each } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { serviceProps, silderProps } from '../../../pages'
const prisma = new PrismaClient()
interface settingProps {
  appNm: string
  descrption: string
  logo?: string
  phone: string
  address: string
  email: string
  map?: string
}

export const UpdateSetting = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    let services: any[] = []
    each(req.body.services, s => {
      services.push({
        title: s.title,
        subTitle: s.subTitle,
        src: s.src
      })
    })
    let sliders: any[] = []
    each(req.body.sliders, s => {
      sliders.push({
        src: s.src
      })
    })
    const settingObj: settingProps = {
      appNm: req.body.appNm,
      descrption: req.body.descrption,
      logo: req.body.logo,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      map: req.body.map
    }

    await prisma.slider.deleteMany({
      where: {
        settingId: req.body.id
      }
    })

    await prisma.service.deleteMany({
      where: {
        settingId: req.body.id
      }
    })

    const setting = await prisma.setting.update({
      where: {
        id: req.body.id
      },
      data: {
        ...settingObj,
        services: {
          createMany: {
            data: services
          }
        },
        sliders: {
          createMany: {
            data: sliders
          }
        }
      }
    })
    if (setting) {
      res.status(200).json({
        data: setting,
        message: `Setting updated successfully`,
        statusCode: 200
      })
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Setting updated fail!`
      })
    }
  } catch (error) {
    console.log(error)
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
