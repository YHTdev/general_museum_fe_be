import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
interface bookProp {
  id?: string;
  name: string;
  pages: pageProps[];
  categoryId: string;
  cover?: string;
}
interface pageProps {
  id?: string
  desc: string
  no:number
}
interface queryProps{
  language?:string
  categoryId?:string
 
}
export const getBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  const {lang,categoryId} = req.query
  console.log("call from getbooks")
  let query:queryProps={}
  if(lang && typeof lang === 'string' ){
     query.language = lang==='my'?'my':'en'
  }
  if(categoryId && typeof categoryId==='string'){
    query.categoryId= categoryId
  }
  try {
    const books = await prisma.book.findMany({
      where:query,
      select: {
        Category: true,
        id: true,
        name: true,
        cover: true,
        categoryId: true,
        createdAt: true,
        updatedAt: true,
        pages: true
      },
      
    })
    res.status(200).json({
      statusCode: 200,
      data: books,
    });
  } catch (error) {
    console.log(error)
    res.status(200).json({
      message: error,
      stautsCode: 500,
    });
  }
};

export const getBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query: any = req.query
     console.log("calling from boook")
    const book = await prisma.book.findUnique({
      where: {
        id: query.bookId,
       
      },
      select: {
        Category: true,
        id: true,
        name: true,
        cover: true,
        categoryId: true,
        createdAt: true,
        updatedAt: true,
        pages:{
          orderBy:{
            no:'asc'
          }
        }
      },
      
    })
    res.status(200).json({
      statusCode: 200,
      data: book,
    });
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500,
    });
  }
};

export const createBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pagesJson:string[] =( req.body.pages);
    console.log(pagesJson.length,"PageJson")
    let pages:pageProps[]=[]
    each(pagesJson,(page,i)=>{
      pages.push({
        desc:page,
        no:i+1
      })
    })
   
    const book = await prisma.book.create({
      data: {
        name: req.body.name,
        cover: req.body.cover,
        categoryId: req.body.categoryId,
        language:req.body.isEn? 'en':'my',
        pages: {
          createMany: {
            data: pages,
          },
        },
      },
    });
    if (book) {
      res.status(200).json({
        statusCode: 200,
        message: `Book created successful`,
        data: book,
      });
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Book created fail`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: error,
      stautsCode: 500,
    });
  }
};

export const updateBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await prisma.page.deleteMany({
      where: {
        bookId: req.body.id
      }
    })
    const pagesJson:string[] = req.body.pages.split(',')
    let pages:pageProps[]=[]
    each(pagesJson,(page,i)=>{
      pages.push({
        desc:page,
        no:i+1
      })
    })
    const book = await prisma.book.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        cover: req.body.cover,
        categoryId: req.body.categoryId,
        language:req.body.isEn? 'en':'my',
        pages: {
          createMany: {
            data: pages,
          },
        },
      },
    });
    if (book) {
      res.status(200).json({
        statusCode: 200,
        message: `Book updated successful`,
        data: book,
      });
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Book updated fail`,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500,
    });
  }
};
export const deleteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);
    const book = await prisma.book.delete({
      where: {
        id: req.body.id,
      },
    });
    if (book) {
      res.status(200).json({
        statusCode: 200,
        message: `Book delete successful`,
        data: book,
      });
    } else {
      res.status(200).json({
        statusCode: 422,
        message: `Book delete fail`,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error,
      stautsCode: 500,
    });
  }
};
