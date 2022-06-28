import { NextApiRequest, NextApiResponse } from 'next'
import { createBook, deleteBook, updateBook } from '../../../../../lib/controllers/book'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
     if (req.method === 'POST') {
      await createBook(req, res)
    } else if (req.method === 'DELETE') {
      await deleteBook(req, res)
    } else if (req.method === 'PUT') {
      await updateBook(req, res)
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
