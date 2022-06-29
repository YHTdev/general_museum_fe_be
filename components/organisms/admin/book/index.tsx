import React from "react";
import { ActionIcon } from "../../../atoms/icons/actionIcon";
import { DeleteIcon } from "../../../atoms/icons/deleteIcon";
import { EditIcon } from "../../../atoms/icons/editIcon";
import { TableCell, UiRow, UiTable } from "../../../atoms/UiTable";
export interface pageProps{
    id?:string;
    desc?:string;
}
export interface categoryProps{
    id?:string;
    name?:string;
}
export interface bookProps{
    id?:string;
    name?:string;
    cover?:string;
    updatedAt?:string;
    pages?:pageProps[];
    Category?:categoryProps;
}
interface props{
    books:bookProps[]
    editHandler:any
    deleteHandler:any
}
export const BookForm:React.FC<props> =({books,editHandler,deleteHandler})=>{
    // const headers:string[] = ["No","Name","Category","UpdatedAt","CreatedAt"]
   
    return(
        <div className="w-full">
           
            <UiTable className="w-full" isHeader={false}>
                <thead>
                    <UiRow isHeader>
                        <TableCell isHeader>
                            Name
                        </TableCell>
                        <TableCell isHeader>
                            Category
                        </TableCell>
                        <TableCell isHeader>
                            Cover
                        </TableCell>
                        <TableCell isHeader>
                            UpdatedAt
                        </TableCell>
                        <TableCell isHeader>
                            <ActionIcon className="w-10 h-10"/>
                        </TableCell>
                    </UiRow>
                </thead>
                <tbody>
                   {
                        books.map((b,i)=>(
                            <UiRow isHeader={false} key={i}>
                                <TableCell isHeader={false}>
                                    {b.name}
                                </TableCell>
                                <TableCell isHeader={false}>
                                    {b.Category && b.Category.name}
                                </TableCell>
                                <TableCell isHeader={false}>
                                    <img src={b.cover} alt={b.name} className="w-16 h-16"/>
                                </TableCell>
                                <TableCell isHeader={false}>
                                    {b.updatedAt}
                                </TableCell>
                                <TableCell isHeader={false}>
                                <button className="mx-2 focus:appearance-none focus:outline-none  active:outline-none" onClick={()=>editHandler(b)}>
                                    <EditIcon className="w-4 h-4" />
                                </button>
                                <button className="mx-2 focus:appearance-none focus:outline-none active:outline-none" onClick={()=>deleteHandler(b.id)}>
                                    <DeleteIcon className="w-4 h-4"/>
                                </button>
                            </TableCell>
                            </UiRow>
                        )) 
                    } 
                </tbody>
            </UiTable>
           
        </div>
    )
}