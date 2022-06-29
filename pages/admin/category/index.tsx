import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { PlusIcon } from '../../../components/atoms/icons/plusIcon'
import { UiModal } from '../../../components/atoms/UiModal'
import { CategoryForm } from '../../../components/organisms/admin/category'
import { CategoryEditForm } from '../../../components/organisms/admin/category/categoryEdit'
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
  const [formData,setFormData] =useState<categoryProps>();
  const editHandler = (category:categoryProps)=>{
    console.log(category);
     
    setFormData({ ...formData,name:category.name,id:category.id })

    setIsEditModalOpen(!isEditModalOpen)
  }
  const EditForm=(e:any)=>{
    e.preventDefault();
  }
  const [isCreateCategoryModalOpen,setIsCreateCategoryModalOpen]=useState(false)
  const createFormOpen=()=>{
    setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
  }
  return (
    <AppWrapper>
      <>
      <div className='flex justify-end items-center content-center'>
                <button onClick={() => createFormOpen()} className='px-36 py-2 focus:outline-none'>
                <PlusIcon className='text-secondary w-auto h-12' />
                </button>
            </div>
      {categoreis && <CategoryForm catgoreis={categoreis} editHandler={editHandler} deleteHandler={deleteHandler}/>}
      <UiModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} className="">
            <form
              onSubmit={e => {
                EditForm(e)
              }}
            >
             <CategoryEditForm formData={formData} setFormData={setFormData} />
          </form>
        </UiModal>
        <UiModal isOpen={isCreateCategoryModalOpen} setIsOpen={setIsCreateCategoryModalOpen} className="">
            <form
             
            >
            
          </form>
        </UiModal>
      </>
    </AppWrapper>
  )
}

export default CategoryAdmin
