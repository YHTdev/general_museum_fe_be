import React, { FC, useState, useCallback, useEffect } from "react";
import { API } from "../../../lib/services";

import { BooksForm } from "../../../components/organisms/books";
import { UiHeader } from "../../../components/atoms/UiHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/";
import { setLang } from "../../../store/common";

<<<<<<< HEAD
const BookListPage: FC = (props) => {
  const query: any = props;
  const categoryId = query.categoryId;
  const [books, setBooks] = useState([]);
  const { language } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  console.log(language);

  const id = 1;
  const getBooks = useCallback(() => {
    API.get(`v1/book/?lang=${language}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          setBooks(res.data.data);
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, [id]);
  const changeLang = () => {
    dispatch(setLang("en"));
    getBooks();
  };

  useEffect(() => {
    getBooks();
    console.log(books, "Books");
  }, [getBooks]);
  return (
    <div>
      <div className="min-h-screen px-2 py-2 bg-slate-900">
        <UiHeader title="စာအုပ်များ..." />
        <BooksForm books={books} />
      </div>
    </div>
  );
};
export async function getServerSideProps(context: any) {
  return {
    props: {
      categoryId: context.query.categoryId,
    },
  };
=======
import { BooksForm } from '../../../components/organisms/books'
import { UiHeader } from '../../../components/atoms/UiHeader'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from '../../../store/'
import { setLang, setloading } from '../../../store/common'
import { UiToggle } from '../../../components/atoms/UiToggle'

 const BookListPage:FC =(props)=>{
    const query:any = props;
    const categoryId = query.categoryId;
   const [books,setBooks] = useState([]);
   const {language,loading} = useSelector((state:RootState)=>state.common)
   const dispatch = useDispatch()
   console.log(language)
  
   const getBooks = useCallback(
    () => {
        API.get(`v1/book/?lang=${language}&categoryId=${categoryId}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.statusCode=== 200){
                setBooks(res.data.data)
            }
            
        })
        .catch(err =>{
            console.log(JSON.stringify(err));
        })
    },
    [language],
   )
   const changeLang =()=>{
    dispatch(setLang(language==='my'?'en':'my'))
    dispatch(setloading(!loading))
    getBooks()
   }
  
   useEffect(() => {
    getBooks()
    console.log(books,"Books")
   }, [getBooks])
  
    return(
        <div>
            
            <div className="bg-slate-900 min-h-screen px-2 py-2">
                <div className='absolute right-6 top-4'>
                    <UiToggle title="" loading={loading} changeLang={changeLang}/>
                </div>
                <UiHeader title='စာအုပ်များ...' />
                <BooksForm books={books}/>
                    
            </div>
        </div>
    )
>>>>>>> 3841227fc339801444600105952cc6c0f1121b2a
}

export default BookListPage;
