import React, { SetStateAction } from "react";
interface props{
    loading:boolean
    changeLang:React.Dispatch<SetStateAction<any>>
}
export const UiToggle:React.FC<props>=({loading,changeLang})=>{
    return(
        <label htmlFor="yellow-toggle" className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" value="" id="yellow-toggle" className="sr-only peer" checked={loading} onClick={changeLang}/>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
            {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</span> */}
        </label>
    )
}