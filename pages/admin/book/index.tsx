import { NextPage } from "next";
import { useState,useCallback,useEffect } from "react";
import { BookForm, bookProps } from "../../../components/organisms/admin/book";
import { AppWrapper } from "../../../components/templates/AdminLayout";
import { API } from "../../../lib/services";

const BookAdmin:NextPage =()=>{
    const [books,setBooks] = useState([]);
    const id=1;
    const getBooks = useCallback(
     () => {
         API.get('v1/book')
         .then(res=>{
             
             if(res.data.statusCode=== 200){
                 setBooks(res.data.data)
             }
             
         })
         .catch(err =>{
             console.log(JSON.stringify(err));
         })
     },
     [id],
    )
   
    useEffect(() => {
     getBooks()
     console.log(books,"Books")
    }, [getBooks])
    const editHandler=(book:bookProps)=>{
        console.log(book);
    }
    const deleteHandler=(id:string)=>{
        
        API.delete('/v1/admin/book',{data:{
            id:id
        }}).then(res => {
            
            if(res.data.statusCode === 200){
                getBooks()
            }
        }).catch(err => {
            console.log(JSON.stringify(err))
        })
    }
    return(
        <AppWrapper>
           { books && <BookForm books={books} editHandler={editHandler} deleteHandler={deleteHandler}/>}
        </AppWrapper>
    )
}

export default BookAdmin