import React from 'react'
import { motion } from 'framer-motion'

interface props {
  icon: JSX.Element
  total: number
  title?:string
}
export const UiSummaryCard: React.FC<props> = ({ icon, total,title }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileInView={{ scale: 0.9 }}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1 }}
      className='bg-secondary bg-opacity-10 rounded-lg border-l-4 shadow-sm border-secondary text-primary px-2 py-2'
    >
      <div className='flex w-full justify-center items-center flex-col space-y-5 content-center px-2 py-2'>
        {icon}
        <span className='text-secondary text-xl'>{title}</span>
        <span className='text-primary text-2xl'>{total}</span>
      </div>
    </motion.div>
  )
}
