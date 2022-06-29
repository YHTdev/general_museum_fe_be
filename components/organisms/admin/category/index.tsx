import React from "react";

import {format} from 'date-fns'
import { TableCell, UiRow, UiTable } from "../../../atoms/UiTable";
import { ActionIcon } from "../../../atoms/icons/actionIcon";
import { EditIcon } from "../../../atoms/icons/editIcon";
import { DeleteIcon } from "../../../atoms/icons/deleteIcon";
export interface categoryProps{
    id?:string;
    name?:string;
    cover?:string;
    updatedAt?:string;
    createdAt?:string;
}

interface props{
    
    catgoreis:categoryProps[]
    editHandler:any
    deleteHandler:any
}
export const CategoryForm:React.FC<props> =({catgoreis,editHandler,deleteHandler})=>{
    return(
        <div className="w-full">
            <UiTable className='w-full' isHeader={false}>
               <>
                <thead>
                <UiRow isHeader>
                <TableCell isHeader>
                    No
                </TableCell>
                <TableCell isHeader>
                    Name
                </TableCell>
                <TableCell isHeader>
                    Cover
                </TableCell>
                <TableCell isHeader>
                    UpdatedAt
                </TableCell>
                <TableCell isHeader>
                    CreatedAt
                </TableCell>
                <TableCell isHeader>
                    <ActionIcon className="h-10 w-10"/>
                </TableCell>
               </UiRow>
                </thead>
               <tbody>
               {
                    catgoreis.map((c,i)=>(
                        <UiRow key={i} isHeader={false}>
                            <TableCell isHeader={false}>
                                {i+1}
                            </TableCell>
                            <TableCell isHeader={false}>
                                {c.name}
                            </TableCell>
                            <TableCell isHeader={false}>
                            <img src={c.cover} alt={c.name} className="w-16 h-16"/>
                            </TableCell>
                            <TableCell isHeader={false}>
                                {c.updatedAt && format(new Date(c.updatedAt),"yyyy-MM-dd")}
                            </TableCell>
                            <TableCell isHeader={false}>
                            {c.createdAt && format(new Date(c.createdAt),"yyyy-MM-dd")}
                            </TableCell>
                            <TableCell isHeader={false}>
                                <button className="mx-2 focus:appearance-none focus:outline-none  active:outline-none" onClick={()=>editHandler(c)}>
                                    <EditIcon className="w-4 h-4" />
                                </button>
                                <button className="mx-2 focus:appearance-none focus:outline-none  active:outline-none" onClick={()=>deleteHandler(c.id)}>
                                    <DeleteIcon className="w-4 h-4"/>
                                </button>
                            </TableCell>
                        </UiRow>
                    ))
                }
               </tbody>
               </>
            </UiTable>
        </div>
    )
}