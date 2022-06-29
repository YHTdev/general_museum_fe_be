import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function halder (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const setting = await prisma.setting.findMany({
      include:{
        services:true,
        sliders:true
      }
    })
    if (setting.length > 0) {
      res.status(200).json({
        statusCode: 200,
        data: setting,
        message: 'success'
      })
    } else {
      res.status(422).json({
        statusCode: 422,
        message: `Setting doesn't exist`
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


