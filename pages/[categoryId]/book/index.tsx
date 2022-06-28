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
                    {
                       
                        // books.map((b:any,index)=>(
                        //     <Link 
                        //     href={`book/`+b.id}
                        //     key={index}
                        //     >
                        //     <motion.div
                                
                        //         initial={{ scale: 0.9, opacity: 0.9 }}
                        //         whileHover={{ scale: 1, opacity: 1 }}
                        //         className='w-full shadow relative flex flex-col justify-center items-center h-60 px-2 py-2 bg-white rounded-md'

                        //         >
                        //             <img src={b.cover} alt={b.name} className='w-24 h-24' />
                        //             <div>
                        //                 <motion.span
                        //                     initial={{scale:0.8,opacity:0.8}}
                        //                     whileHover={{ scale: 1, opacity: 1 }}
                        //                 >
                        //                     {b.name}
                        //                 </motion.span>
                        //             </div>
                
                        //     </motion.div>
                        //     </Link>
                        // ))
                    }
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

// export const getStaticProps = async (context:any) => {
//     const api = await API.post("localhost:3000/api/v1/book")
//     const data = await api.data
//     return {
//         props: {
//             data
//         }
//     }
// }

export default BookListPage