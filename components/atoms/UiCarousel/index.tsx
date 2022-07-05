import React, { useCallback, useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { motion } from 'framer-motion'
import { silderProps } from '../../../pages'
import Image from 'next/image'

interface props {
  sliders: silderProps[]
}

export const UiCarousel: React.FC<props> = ({ sliders }) => {
  const [height, setHeight] = useState<number>(800)
  const getHeight = useCallback(() => {
    if (window) {
      const windowHeight = (window.screen.availHeight / 3) * 2
      console.log('actual screen ->', window.screen)
      console.log('windowHeight =>', windowHeight)

      setHeight(windowHeight)
    }
  }, [])
  useEffect(() => {
    getHeight()
  }, [getHeight])

  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={true}
        className='w-full'
        autoplay={true}
        lazy={true}
      >
        {sliders.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className=''
              style={{
                height: height,
                background: `url(${s.src}) center no-repeat`,
                backgroundSize: `cover`
              }}
            >
              <div className=' backdrop-blur-md bg-slate-500/25'>
                <div
                  // className="relative flex flex-col w-full py-2 mx-auto max-w-screen-2xl md:flex-row "
                  className='grid  grid-cols-1 md:grid-cols-2'
                  style={{
                    height: height
                  }}
                >
                  <motion.div>
                    <motion.div
                      transition={{ ease: 'easeInOut', duration: 1 }}
                      initial={{ scale: 0.7, opacity: 0.9 }}
                      whileHover={{ scale: 0.8, opacity: 1 }}
                    
                      style={{height:height}}
                    >
                      <Image src={s.src} alt={s.title} layout='fill' className='relative object-cover w-full rounded-2xl' />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                    className='flex flex-col items-center content-center justify-center w-full space-y-3 text-slate-900 '
                  >
                    <div className='p-8 shadow-xl rounded-xl bg-slate-100/50'>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates exercitationem assumenda veniam commodi, laboriosam eligendi nihil dolorum laborum, libero explicabo dolores vitae ipsa voluptatibus laudantium tempora nisi cum, fugit saepe!
                    </div>
                  </motion.div>
                  {/* <div className=" backdrop-blur-md"></div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
