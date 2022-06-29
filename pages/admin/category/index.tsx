import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { UiModal } from '../../../components/atoms/UiModal'
import { CategoryForm } from '../../../components/organisms/admin/category'
import { AppWrapper } from '../../../components/templates/AdminLayout'
import { API } from '../../../lib/services'
import { categoryProps } from '../../category'

const CategoryAdmin: NextPage = () => {
  
  const [categoreis, setcategoreis] = useState<categoryProps[]>([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const getCategories = useCallback(() => {
    API.get('/v1/category')
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
            console.log(res.data.data)
          setcategoreis(res.data.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    getCategories()
  }, [getCategories])

  const deleteHandler = (id:string)=>{
      
      API.delete('/v1/admin/category',{data:{
        id:id
      }}).then(res => {
          
          if(res.data.statusCode === 200){
              getCategories()
          }
      }).catch(err => {
          console.log(JSON.stringify(err))
      })
  }
  const [formData,setFormData] =useState([]);
  const editHandler = (category:categoryProps)=>{
    console.log(category);
     
    setFormData({ ...formData })

    setIsEditModalOpen(!isEditModalOpen)
  }
  const EditForm=(e:any)=>{
    e.preventDefault();
  }
  return (
    <AppWrapper>
      <>
      {categoreis && <CategoryForm catgoreis={categoreis} editHandler={editHandler} deleteHandler={deleteHandler}/>}
      <UiModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} className="">
            <form
              onSubmit={e => {
                EditForm(e)
              }}
            >
            
          </form>
        </UiModal>
      </>
    </AppWrapper>
  )
}

export default CategoryAdmin
