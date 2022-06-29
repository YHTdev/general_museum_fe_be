import Link from 'next/link';
import React from 'react';
import { commonProps, serviceProps, silderProps } from '../../../pages';
import { RightArrow } from '../../atoms/icons/rightArrow';
import { UiCarousel } from '../../atoms/UiCarousel';
import { UiService } from '../../atoms/UiServices';

export const HeroContent:React.FC<commonProps> =({services,sliders})=>{

    return(
        <div className='min-h-screen bg-slate-900'>
          
                {
                    sliders && 
                    <UiCarousel sliders={sliders} />
                }
                <div className='flex justify-center w-full  px-2 py-2 my-3 content-center items-center '>
                    <Link href="/category">
                       <a className='bg-secondary animate-pulse px-2 py-2 shadow-lg rounded-full  text-inverse'>
                         <RightArrow className='w-8 h-8' />
                       </a>
                    </Link>
                </div>
                <UiService services={services} />

        </div>
    )
}