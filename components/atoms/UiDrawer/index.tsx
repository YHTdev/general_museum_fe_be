import React,{Dispatch,SetStateAction} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
interface props{
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>,
    children:any
}
export const UiDrawer:React.FC<props> = ({isOpen,setIsOpen,children})=>{
    return(
        <Drawer open={isOpen} onClose={()=>{setIsOpen(!isOpen)}} direction='left'>
            {children}
        </Drawer>
    )
}