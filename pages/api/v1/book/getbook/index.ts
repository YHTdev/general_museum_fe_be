import { NextApiRequest, NextApiResponse } from 'next'
import { getBook } from '../../../../../lib/controllers/book'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
   
     await getBook(req,res)
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
