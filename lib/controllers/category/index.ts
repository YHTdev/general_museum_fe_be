import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()
export const getCategories = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const categories = await prisma.category.findMany({})
    if (categories.length > 0) {
      res.status(200).json({
        statusCode: 200,
        data: categories,
        message: 'success'
      })
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Category doesn't exist!`
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}

interface categoryProp {
  name: string
  id?: string
}

export const createCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const categoryObj: categoryProp = {
      name: req.body.name
    }
    const category = await prisma.category.create({
      data: categoryObj
    })
    if (category) {
      res.status(200).json({
        statusCode: 200,
        message: 'success',
        data: category
      })
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Category created fail`
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}

export const updateCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const category = await prisma.category.update({
      where: {
        id: req.body.id
      },
      data: {
        name: req.body.name
      }
    })
    if (category) {
      res.status(200).json({
        data: category,
        message: 'category updated successfully',
        statusCode: 200
      })
    } else {
      res.status(200).json({
        statusCode: 422,
        message: 'fail'
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}

export const deleteCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const category = await prisma.category.delete({
      where: {
        id: req.body.id
      }
    })
    if (category) {
      res.status(200).json({
        statusCode: 200,
        message: 'Category deleted successfully'
      })
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `fail`
      })
    }
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error
    })
  }
}
