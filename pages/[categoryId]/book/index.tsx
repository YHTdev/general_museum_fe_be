import { NextPage } from 'next'
import React, { FC, useState,useCallback,useEffect } from 'react'
import { API } from '../../../lib/services'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BooksForm } from '../../../components/organisms/books'

// interface BookListPage{
//     data: any
// }

// const BookListPage:FC<BookListPage> =({data})=>{
 const BookListPage:FC =(props)=>{
    const query:any = props;
    const categoryId = query.categoryId;
   const [books,setBooks] = useState([]);
   const id=1;
   const getBooks = useCallback(
    () => {
        API.get('v1/book')
        .then(res=>{
            console.log(res.data)
            if(res.data.statusCode=== 200){
                setBooks(res.data.data)
            }
            
        })
        .catch(err =>{
            console.log(JSON.stringify(err));
        })
    },
    [id],
   )
  
   useEffect(() => {
    getBooks()
    console.log(books,"Books")
   }, [getBooks])
    return(
        <div>
            Book list Page
            <div className=''>
                <BooksForm books={books}/>
                    
            </div>
        </div>
    )
}
export async function getServerSideProps(context:any) {
    
    return {
      props: {
        categoryId:context.query.categoryId
      
      },
    }
  }



export default BookListPage