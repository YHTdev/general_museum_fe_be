import { NextPage } from 'next'
import React from 'react'
// react-flip-book
const DetailBookPage:NextPage =(props)=>{
    const query:any = props;
    const bookId = query.bookId;
    const categoryId = query.categoryId;

    return(
        <div>
            book detail Page
        </div>
    )
}

export default DetailBookPage


export async function getServerSideProps(context:any) {
    
    return {
      props: {
        categoryId:context.query.categoryId,
        bookId:context.query.bookId
      },
    }
  }