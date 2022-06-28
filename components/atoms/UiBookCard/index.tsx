import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface props {
  book: any
}
export const BookCard: React.FC<props> = ({ book }) => {
  return (
    <Link href={`book/`+book.id}>
    <motion.div
      initial={{ scale: 0.9, opacity: 0.9 }}
      whileHover={{ scale: 1, opacity: 1 }}
      className='w-full relative flex flex-col justify-center items-center h-60 px-2 py-2 bg-white rounded-md'
    >
      <img src={book.cover} alt={book.name} className='w-24 h-24' />
      <div className='absolute bottom-0  bg-indigo-900 text-white rounded-b-md w-full px-2 py-2 flex justify-center items-center content-center'>
        <motion.span
          initial={{ scale: 0.8, opacity: 0.8 }}
          whileHover={{ scale: 1, opacity: 1 }}
        >
          {' '}
          {book.name}{' '}
        </motion.span>
      </div>
    </motion.div>
    </Link>
  )
}