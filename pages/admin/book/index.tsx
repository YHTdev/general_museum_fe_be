import { EditorState } from 'draft-js'
import { NextPage } from 'next'
import React, { useState, useCallback, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { PlusIcon } from '../../../components/atoms/icons/plusIcon'
import { UiModal } from '../../../components/atoms/UiModal'
import { BookForm, bookProps } from '../../../components/organisms/admin/book'
import { BookEditForm } from '../../../components/organisms/admin/book/bookEdit'
import { CreateBookForm } from '../../../components/organisms/admin/book/createbook'
import { AppWrapper } from '../../../components/templates/AdminLayout'
import { API } from '../../../lib/services'

const BookAdmin: NextPage = () => {
  const [books, setBooks] = useState([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isCreateBookModalOpen, setIsCreateBookModalOpen] = useState(false)
  const {addToast} = useToasts()
  const id = 1
  const getBooks = useCallback(() => {
    API.get('v1/book/all')
      .then(res => {
        if (res.data.statusCode === 200) {
          setBooks(res.data.data)
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }, [id])

  useEffect(() => {
    getBooks()
    console.log(books, 'Books')
  }, [getBooks])

  const [formData, setFormData] = useState<bookProps>({
    isEn:false,
    name:"",
    cover:"",
    categoryId:"",
    pages:[]
  })
  console.log(formData)
  const editHandler = (book: bookProps) => {
   
    setFormData({
      ...formData,
      name: book.name,
      cover: book.cover,
      categoryId: book.categoryId,
      pages: book.pages,
      id:book.id
      
    })
    

    setIsEditModalOpen(!isEditModalOpen)
  }
  const EditForm = (e: any) => {
    e.preventDefault()
    setIsEditModalOpen(!isEditModalOpen)
    API.put('/v1/admin/book', formData)
      .then(res => {
        if (res.data.statusCode === 200) {
          addToast("success",{appearance:'success',autoDismiss:true})
          getBooks()
          
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  const deleteHandler = (id: string) => {
    API.delete('/v1/admin/book', {
      data: {
        id: id
      }
    })
      .then(res => {
        if (res.data.statusCode === 200) {
          getBooks()
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }
  const createFormOpen = () => {
    setIsCreateBookModalOpen(!isCreateBookModalOpen)
  }

  const CreateBook = (e: React.FormEvent) => {
    setIsCreateBookModalOpen(!isCreateBookModalOpen)
    e.preventDefault()
    API.post('/v1/admin/book', formData)
      .then(res => {
        if (res.data.statusCode === 200) {
          addToast("success",{appearance:'success',autoDismiss:true})
          getBooks()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <AppWrapper>
      <>
        <div className='flex justify-end items-center content-center'>
          <button
            onClick={() => createFormOpen()}
            className='px-36 py-2 focus:outline-none'
          >
            <PlusIcon className='text-secondary w-auto h-12' />
          </button>
        </div>
        {books && (
          <BookForm
            books={books}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )}
        <UiModal
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          className=''
        >
          <form
            onSubmit={e => {
              EditForm(e)
            }}
          >
            <BookEditForm formData={formData} setFormData={setFormData} />
          </form>
        </UiModal>
        <UiModal
          isOpen={isCreateBookModalOpen}
          setIsOpen={setIsCreateBookModalOpen}
          className=''
        >
          <form onSubmit={e => CreateBook(e)}>
            <CreateBookForm  formData={formData} setFormData={setFormData} />
          </form>
        </UiModal>
      </>
    </AppWrapper>
  )
}

export default BookAdmin
