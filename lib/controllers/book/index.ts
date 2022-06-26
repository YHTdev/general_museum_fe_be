import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export const getBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const books = await prisma.book.findMany({
      select: {
        Category: true,
        id: true,
        name: true,
        cover: true,
        categoryId: true,
        createdAt: true,
        updatedAt: true,
        pages: true
      }
    })
    res.status(200).json({
      statusCode: 200,
      data: books
    })
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500
    })
  }
}

export const getBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query: any = req.query
    const book = await prisma.book.findFirst({
      where: {
        id: query.bookId
      },
      select: {
        Category: true,
        id: true,
        name: true,
        cover: true,
        categoryId: true,
        createdAt: true,
        updatedAt: true,
        pages: true
      }
    })
    res.status(200).json({
        statusCode:200,
        data:book
    })
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500
    })
  }
}

export const createBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500
    })
  }
}

export const updateBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500
    })
  }
}
export const deleteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500
    })
  }
}
