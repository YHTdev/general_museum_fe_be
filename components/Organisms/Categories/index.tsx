import React from 'react'
import { appData } from '../../../_data'
import { CategoryCard } from '../../atoms/UiCategoryCard'
import { motion } from 'framer-motion'
export const CategoriesForm: React.FC = () => {
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
          <CategoryCard category={c} />
        </motion.div>
      ))}
    </div>
  )
}
