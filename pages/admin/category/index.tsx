import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { CategoryForm } from '../../../components/organisms/admin/category'
import { AppWrapper } from '../../../components/templates/AdminLayout'
import { API } from '../../../lib/services'
import { categoryProps } from '../../category'

const CategoryAdmin: NextPage = () => {
  const headers: string[] = ['No', 'Name', 'Cover', 'updatedAt', 'createdAt']
  const [categoreis, setcategoreis] = useState<categoryProps[]>([])
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

  return (
    <AppWrapper>
      {categoreis && <CategoryForm catgoreis={categoreis} headers={headers} />}
    </AppWrapper>
  )
}

export default CategoryAdmin
