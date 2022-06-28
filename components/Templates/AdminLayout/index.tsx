import React from 'react'

interface props{
    children:JSX.Element
}

export const AppWrapper:React.FC<props> =({children})=>{
    return(
        <div className='min-h-screen bg-slate-100'>
            {children}
        </div>
    )
}