import React from "react";
import {motion} from 'framer-motion'
import { RightArrow } from "../icons/rightArrow";
import { LeftArrow } from "../icons/leftArrow";
import { settingProps } from "../../templates/AdminLayout";

interface props{
    title:string;
    setting?:settingProps
}

export const UiHeader:React.FC<props> =({title,setting})=>{
    return(
        <div className='flex w-full justify-center text-white px-2 py-2 border-b-2 border-slate-600 my-5 rounded-lg items-center content-center'>
            <motion.h4 initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:1,delay:1}} className="flex justify-center items-center content-center space-x-4" > 
            <RightArrow className="w-6 h-6" />
              <span className='text-xl'>
              {setting?.appNm} 
              </span>
             
              <LeftArrow className="w-6 h-6" />
            </motion.h4>
        </div>
    )
}