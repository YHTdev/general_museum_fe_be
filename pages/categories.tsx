import React from 'react'
import { UiHeader } from '../components/Atoms/UiHeader'
import { CategoriesForm } from '../components/Organisms/Categories'

const CategoriesPage:React.FC =()=>{
    return(
        <div className='w-full bg-slate-900 min-h-screen px-2 py-2'>
          <UiHeader title='အမျိုးအစားများ...' />
          <CategoriesForm />
        </div>
    )
}

export default CategoriesPage