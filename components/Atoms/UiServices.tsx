import React from 'react'
import { motion } from 'framer-motion'
import { appData } from '../_data'
import Image from 'next/image';
export const UiService: React.FC = () => {
  
  return (
    <div className='w-full max-w-screen-2xl mx-auto grid grid-cols-12 gap-5'>
      {appData.heroContent.services.map((s, i) => (
        <div
          key={i}
          className={`col-span-12 md:col-span-3 min-h-fit  px-2 py-2`}
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            whileTap={{ scale: 0.8, opacity: 1 }}
            whileHover={{ scale: 0.8, opacity: 1 }}
            transition={{ease:'easeInOut',duration:1}}
            className='flex w-full justify-center items-center content-center flex-col px-2 py-2 rounded-md bg-slate-800'
          >
            <Image width={64}  height={64} src={s.src} alt={s.title} />
            
            <div className='text-slate-50 w-full px-2 py-2 flex flex-col'>
              <p className='font-bold text-sm'> {s.title} </p>
              <h6> {s.subTitle} </h6>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
