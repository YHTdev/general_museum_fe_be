import React from "react";
import { UiTable } from "../../../atoms/UiTable";
import {format} from 'date-fns'
export interface categoryProps{
    id?:string;
    name?:string;
    cover?:string;
    updatedAt?:string;
    createdAt?:string;
}

interface props{
    headers:string[];
    catgoreis:categoryProps[]
}
export const CategoryForm:React.FC<props> =({headers,catgoreis})=>{
    return(
        <div className="w-full">
            <UiTable headers={headers} className='w-full' >
               <>
                {
                    catgoreis.map((c,i)=>(
                        <tr key={i}>
                            <td>
                                {i+1}
                            </td>
                            <td>
                                {c.name}
                            </td>
                            <td>
                                {c.cover}
                            </td>
                            <td>
                                {c.updatedAt && format(new Date(c.updatedAt),"yyyy-MM-dd")}
                            </td>
                            <td>
                            {c.createdAt && format(new Date(c.createdAt),"yyyy-MM-dd")}
                            </td>
                        </tr>
                    ))
                }
               </>
            </UiTable>
        </div>
    )
}