import Link from 'next/link'
import React from 'react'
import { AppLogo } from '../../atoms/UiAppLogo'
import { motion } from 'framer-motion'
import { DashbaordIcon } from '../../atoms/icons/dashboardIcon'
import { SettingIcon } from '../../atoms/icons/setting'
import { CategoryIcon } from '../../atoms/icons/categoryIcon'
import { BookIcon } from '../../atoms/icons/bookIcon'
export const SideNav: React.FC = () => {
  return (
    <div className='w-full bg-slate-100 flex flex-col space-y-4 px-2 py-2'>
      <AppLogo />
      <div className='flex flex-col space-y-2'>
        <Link  href='/admin'>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            className='flex justify-start items-center content-center flex-row space-x-3 px-2 py-2 border-b border-opacity-40 border-secondary'
          >
            <DashbaordIcon className='w-6 h-6 text-primary text-opacity-70' />
            <span className='text-primary text-sm font-bold  text-opacity-70'>Dashboard</span>
          </motion.div>
        </Link>
        <Link  href='/admin/setting'>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            className='flex justify-start items-center content-center flex-row space-x-3 px-2 py-2 border-b border-opacity-40 border-secondary'
          >
            <SettingIcon className='w-6 h-6 text-primary text-opacity-70' />
            <span className='text-primary text-sm font-bold  text-opacity-70'>Setting</span>
          </motion.div>
        </Link>
        <Link  href='/admin/category'>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            className='flex justify-start items-center content-center flex-row space-x-3 px-2 py-2 border-b border-opacity-40 border-secondary'
          >
            <CategoryIcon className='w-6 h-6 text-primary text-opacity-70' />
            <span className='text-primary text-sm font-bold text-opacity-70'>Categories</span>
          </motion.div>
        </Link>
        <Link  href='/admin/book'>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            className='flex justify-start items-center content-center flex-row space-x-3 px-2 py-2 border-b border-opacity-40 border-secondary'
          >
            <BookIcon className='w-6 h-6 text-primary text-opacity-70' />
            <span className='text-primary text-sm font-bold  text-opacity-70'>Books</span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
