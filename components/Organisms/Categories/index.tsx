import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { appData } from '../../_data'
import { CategoryCard } from '../../Atoms/UiCategoryCard'
// import { BooksForm } from './bookForm'
// import { bookProp } from '../../_data/books'



// interface props {
//   books: bookProp
// }

export const CategoriesForm: React.FC = () => {
  // const [ bookList, setBookList ] = useState([])
      
  //   const onClick = () => {
  //     setBookList(() => <BooksForm />)
  //   }

  return (
    <div className='w-full mx-auto max-w-screen-xl grid grid-cols-12 gap-4'>
      {appData.categories.map((c, i) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='col-span-4'
          key={i}
        >
          <CategoryCard category={c}/>
        </motion.div>
      ))}
    </div>
  )
}
