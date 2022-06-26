import { NextApiRequest, NextApiResponse } from 'next'
import { UpdateSetting } from '../../../../../lib/controllers/setting'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'PUT') {
      await UpdateSetting(req, res)
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Method is not allowed!`
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
