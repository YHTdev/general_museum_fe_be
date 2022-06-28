import React, { useCallback, useEffect, useState } from 'react'
import { UiHeader } from '../components/atoms/UiHeader';

import { CategoriesForm } from '../components/organisms/category'
import { API } from '../lib/services';
export interface categoryProps{
  id?:string;
  name?:string;
  cover?:string
}
const CategoriesPage:React.FC =()=>{
    const [categories, setCategories] = useState<categoryProps[]>([])
    const getCategory = useCallback(
      () => {
        API.get("/v1/category").then(res=>{
          if(res.data && res.data.statusCode===200){
            const categoryResponse:categoryProps[] = res.data.data;
            setCategories(categoryResponse)
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
      [],
    )

    useEffect(() => {
       getCategory()
    }, [getCategory])
    
    
    return(
        <div className='w-full bg-slate-900 min-h-screen px-2 py-2'>
          <UiHeader title='အမျိုးအစားများ...' />
          <CategoriesForm categories={categories} />
        </div>
    )
}

export default CategoriesPage