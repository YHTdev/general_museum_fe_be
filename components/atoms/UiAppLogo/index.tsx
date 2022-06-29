import React from "react";
import { settingProps } from "../../templates/AdminLayout";
interface props{
    setting?:settingProps
}
export const AppLogo:React.FC<props> =({setting})=>{
    
    return(
        <div className="flex justify-start space-x-2 w-full items-center content-center">
             <img src={setting?.logo} className='w-auto h-10' alt="logo" />
             <span className='font-bold'> {setting?.appNm} </span>
        </div>
    )
}