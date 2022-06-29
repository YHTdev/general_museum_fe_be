import React,{useCallback,useState,useEffect} from 'react'
import { API } from '../../../lib/services';
import { categoryProps } from '../../../pages/category';
interface props{
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>;
    id:string;
    name:string;
}
export const UiSelectInput:React.FC<props> = ({
    formData,
    setFormData,
    id,
    name
    
  }) => {
    const [categories, setcategories] = useState<categoryProps[]>([])
    const getCategories = useCallback(() => {
        API.get('/v1/category')
          .then(res => {
            if (res.data && res.data.statusCode === 200) {
              setcategories(res.data.data)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }, [])
      useEffect(() => {
        getCategories()
      }, [getCategories])
    
    return (
      <div className="flex mx-2">
        <select
          value={formData[name]}
          name={name}
          id={id}
          className="w-full flex border-secondary rounded-md border  justify-start items-center content-center px-2 py-2 focus:outline-none appearance-none bg-white"
          onChange={e => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
           
          }}
      >
         
          <option value="" disabled selected>အမျိုးအစားများ</option>
          {
             
                      categories.map( (category,i) => (
                          
                          <option 
                          key={i}
                          value={category.id}
                         >{category.name}</option>
                      ) )
                  }
      </select>
      </div>

    )
}

