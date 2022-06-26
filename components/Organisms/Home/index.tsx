import React from 'react'
import { UiCarousel } from '../../Atoms/UiCarousel'
import { UiService } from '../../Atoms/UiServices'

export const HeroContent:React.FC =()=>{
    return(
        <div className='min-h-screen bg-slate-900'>
          
           <UiCarousel />
           <UiService />
        </div>
    )
}