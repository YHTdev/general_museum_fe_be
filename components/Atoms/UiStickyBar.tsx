import React from 'react'
import { motion } from 'framer-motion'
import { appData } from '../_data'
import { PhoneIcon } from './Icons/PhoneIcon'
import { EmailIcon } from './Icons/email'
import { FacebookIcon } from './Icons/facebook'

export const UiStickyBar: React.FC = () => {
  return (
    <motion.nav
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className='w-full  flex flex-col md:flex-row justify-end bg-opacity-50 items-center content-center bg-indigo-900 text-slate-100 px-4 py-2'
    >
      <div className='flex w-full justify-start items-center content-center space-x-6'></div>

      <div className='flex w-full justify-end items-center content-center space-x-6'>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          href={`tel:+${appData.phoneNum}`}
        >
          <PhoneIcon className='h-5 w-5 text-white' />
        </motion.a>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          href={`mailto:${appData.email}`}
        >
          <EmailIcon className='h-5 w-5 text-white' />
        </motion.a>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          href={`${appData.facebook}`}
        >
          <FacebookIcon className='h-5 w-5 text-white' />
        </motion.a>
      </div>
    </motion.nav>
  )
}

