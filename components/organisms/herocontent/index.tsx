import React from 'react';
import { commonProps, serviceProps, silderProps } from '../../../pages';
import { UiCarousel } from '../../atoms/UiCarousel';
import { UiService } from '../../atoms/UiServices';

export const HeroContent:React.FC<commonProps> =({services,sliders})=>{

    return(
        <div className='min-h-screen bg-slate-900'>
          
                {
                    sliders && 
                    <UiCarousel sliders={sliders} />
                }
                <UiService services={services} />

        </div>
    )
}