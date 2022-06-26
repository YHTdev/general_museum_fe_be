import { NextApiRequest, NextApiResponse } from 'next'
import { getCategories } from '../../../../lib/controllers/category'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
     await getCategories(req,res)
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
