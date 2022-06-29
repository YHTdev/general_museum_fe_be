import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { PlusIcon } from '../../../components/atoms/icons/plusIcon'
import { UiModal } from '../../../components/atoms/UiModal'
import { CategoryForm } from '../../../components/organisms/admin/category'
import { CategoryCreateForm } from '../../../components/organisms/admin/category/categoryCreate'
import { CategoryEditForm } from '../../../components/organisms/admin/category/categoryEdit'
import { AppWrapper } from '../../../components/templates/AdminLayout'
import { API } from '../../../lib/services'
import { categoryProps } from '../../category'

const CategoryAdmin: NextPage = () => {
  
  const [categoreis, setcategoreis] = useState<categoryProps[]>([])
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  
  const getCategories = useCallback(() => {
    API.get('/v1/category')
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
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
  const clearFormData = () => {
    setFormData({
      
      name:'',
      cover:''
    })
  }
  const editHandler = (category:categoryProps)=>{
    setIsEditModalOpen(!isEditModalOpen) 
    setFormData({name:category.name,id:category.id,cover:category.cover })

    
    
  }
  const EditForm=(e:any)=>{
    setIsEditModalOpen(!isEditModalOpen);
    e.preventDefault();
 
    API.put('/v1/admin/category',formData).then(res=>{
      
      if(res.data && res.data.statusCode === 200){
        getCategories();
       
      }
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      
    })
  }
  const [isCreateCategoryModalOpen,setIsCreateCategoryModalOpen]=useState(false)
  const createFormOpen=()=>{
    clearFormData();
    setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
  }
  const CreateForm=(e:any)=>{
    e.preventDefault();
    console.log(formData)
    setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
    API.post('/v1/admin/category',formData).then(res => {
      if(res.data && res.data.statusCode === 200){
       
        getCategories();
      }
    })
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
             <CategoryEditForm formData={formData} setFormData={setFormData}/>
          </form>
        </UiModal>
        <UiModal isOpen={isCreateCategoryModalOpen} setIsOpen={setIsCreateCategoryModalOpen} className="">
            <form
             onSubmit={e => {
              CreateForm(e)
             }}
            >
            <CategoryCreateForm formData={formData} setFormData={setFormData} />
          </form>
        </UiModal>
      </>
    </AppWrapper>
  )
}

export default CategoryAdmin
