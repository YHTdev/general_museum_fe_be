import { NextApiRequest, NextApiResponse } from 'next'
import { LoginController } from '../../../../lib/controllers/auth'

export default async function halder (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      await LoginController(req, res)
    } else {
      res.status(200).json({
        statusCode: 405,
        message: `Method is not allowed!`
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
