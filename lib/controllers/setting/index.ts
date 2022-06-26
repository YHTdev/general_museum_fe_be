import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
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
    console.log(req.body)
    const settingObj: settingProps = {
      appNm: req.body.appNm,
      descrption: req.body.descrption,
      logo: req.body.logo,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      map: req.body.map
    }
    const setting = await prisma.setting.update({
      where: {
        id: req.body.id
      },
      data: settingObj
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
