import React from "react";
import { UiTable } from "../../../atoms/UiTable";
export interface pageProps{
    id?:string;
    desc?:string;
}
export interface bookProps{
    id?:string;
    name?:string;
    cover?:string;
    pages:pageProps[];

}
interface props{
    books:bookProps[]
}
export const BookForm:React.FC =()=>{
    const headers:string[] = ["No","Name","Category","UpdatedAt","CreatedAt"]
    return(
        <div>
           <UiTable headers={headers} className='w-full' >
                <tr>

                </tr>
           </UiTable>
        </div>
    )
}