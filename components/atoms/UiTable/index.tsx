import { each } from 'lodash'
import React from 'react'
import ReactTailwindTable, { Icolumn } from 'react-tailwind-table'
interface props {
  className?: string
  headers: string[]
  children: JSX.Element
}
export const UiTable: React.FC<props> = ({ className, headers, children }) => {
  let twHeaders:Icolumn[] = []
  each(headers,(h,i)=>{
    twHeaders.push({
      field:h.toLowerCase(),
      use:h
    })
  })
  return (
    <ReactTailwindTable columns={twHeaders} rows={[]}  />
  )
}
