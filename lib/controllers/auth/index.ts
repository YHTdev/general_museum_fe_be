import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { signToken, verifyPassword } from '../../helpers'
const prisma = new PrismaClient()
export const LoginController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email
      }
    })
    if (user) {
      const verified = verifyPassword(user.password, req.body.password)
      if (verified) {
        const accessToken = signToken(user)
        res.setHeader('Set-Cookie',`accessToken=${accessToken}`)
        res.status(200).json({
          statusCode: 200,
          message: `Login successful`,
          accessToken: accessToken
        })
      } else {
        res.status(200).json({
          statusCode: 422,
          message: `Password doesn't match`
        })
      }
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `User doesn't match`
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
