import { NextApiRequest, NextApiResponse } from 'next'
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory
} from '../../../../../lib/controllers/category'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      await getCategories(req, res)
    } else if (req.method === 'POST') {
      await createCategory(req, res)
    } else if (req.method === 'DELETE') {
      await deleteCategory(req, res)
    } else if (req.method === 'PUT') {
      await updateCategory(req, res)
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
