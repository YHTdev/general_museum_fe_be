import React, { useCallback, useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { appData } from '../../components/_data'
import {motion} from 'framer-motion'



export const UiCarousel: React.FC = () => {
 
  const [height, setHeight] = useState<number>(800);
  const getHeight = useCallback(
    () => {
      if(window){
        const windowHeight = ((window.screen.availHeight/3)*2)
        console.log("actual screen ->", window.screen);
        console.log("windowHeight =>", windowHeight);
        
        
        setHeight(windowHeight)
      }
    },
    [],
  )
  useEffect(() => {
   getHeight()
  }, [getHeight])
  
  

   return (
      <div>
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          navigation={true}
          className="w-full"
          autoplay={true}
          lazy={true}>
          {appData.heroContent.sliders.map((s, i) => (
            <SwiperSlide key={i}>
              <div
                className=""
                style={{
                  height: height,
                  background: `url(${s.src}) center no-repeat`,
                  backgroundSize: `cover`,
                }}>
                <div className=" backdrop-blur-md bg-slate-500/25">
                  <div
                    // className="relative flex flex-col w-full py-2 mx-auto max-w-screen-2xl md:flex-row "
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{
                      height: height,
                    }}>
                    <motion.div>
                      <motion.img
                        transition={{ ease: "easeInOut", duration: 1 }}
                        src={s.src}
                        initial={{ scale: 0.7, opacity: 0.9 }}
                        whileHover={{ scale: 0.8, opacity: 1 }}
                        alt={s.title}
                        className="relative object-cover w-full rounded-2xl "
                      />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      transition={{ ease: "easeInOut", duration: 2 }}
                      className="flex flex-col items-center content-center justify-center w-full space-y-3 text-slate-900 ">
                      <div className="p-8 shadow-xl rounded-xl bg-slate-100/50">
                        <h4 className="text-4xl ">{s.right.title} </h4>
                        <h6>{s.right.subtitle} </h6>
                        <p> {s.right.description} </p>
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
    );
}