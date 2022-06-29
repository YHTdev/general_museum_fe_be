import { each } from 'lodash'
import React from 'react'
import ReactTailwindTable, { Icolumn } from 'react-tailwind-table'
interface props {
  className?: string
  children: any
  isHeader:boolean
}
export const UiTable: React.FC<props> = ({ className, children }) => {

  return (
    <div className={`${className || ""} overflow-x-auto`}>
      <table className="w-full table-auto">{children}</table>
    </div>
  )
}
export const UiRow:React.FC<props> = ({className,children}) =>{
  return (
    <tr className={`${className || ""}`}>
      {children}
    </tr>
  )
}
export const TableCell:React.FC<props> = ({ children, isHeader, className }) => {
  if (isHeader) {
    return (
      <th
        className={`px-2 py-3 text-left first:pl-5 last:pr-5 whitespace-nowrap ${
          className || ""
        }`}>
        {children}
      </th>
    );
  }
  return (
    <td
      className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${
        className || ""
      }`}>
      <div className={`text-sm leading-5 text-gray-500 ${className || ""}`}>
        {children}
      </div>
    </td>
  );
};