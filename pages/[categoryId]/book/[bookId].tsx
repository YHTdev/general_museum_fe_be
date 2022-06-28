import { NextPage } from 'next'
import { API } from '../../../lib/services'
import React,{useState,useCallback,useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
// react-flip-book

const DetailBookPage:NextPage =(props)=>{
    const query:any = props;
    const bookId = query.bookId;
    const categoryId = query.categoryId;
    const [book,setBook]:any = useState();
    const i=1;
    const getBook = useCallback(
     () => {
         API.get('v1/book/'+bookId)
         .then(res=>{
           
             if(res.data.statusCode === 200){  
                 console.log(res.data.data.pages)
                 setBook(res.data.data)
             }
             
         })
         .catch(err =>{
             console.log(JSON.stringify(err));
         })
     },
     [i],
    )
   
    useEffect(() => {
     getBook()
     console.log(book,"Book")
    }, [getBook])

    
    return(
        <div>
            book detail Page
           
           {
            book && book.pages && <HTMLFlipBook 
            width={300}
            showPageCorners={true}
            startPage={0}
            disableFlipByClick={true}
            style={{}}
             height={500} 
             size="fixed"
             minWidth={300}
             minHeight={500}
             maxWidth={600}
             maxHeight={600}
             drawShadow={true}
             flippingTime={1000}
             usePortrait={true}
             startZIndex={0}
             autoSize={true}
             maxShadowOpacity={1}
             showCover={false}
             mobileScrollSupport={true}
             swipeDistance={30}
             clickEventForward={true}
             useMouseEvents={true}
             renderOnlyPageLengthChange={false}
             className="m-20 rounded shadow-sm"
             
             >
                <Page number="0" isStartPage>Start Page</Page>
                {
                  
                  book.pages.map((p:any,i:any)=>{
                    return <Page key={i} number={i+1} title={book.name}>{p.desc}</Page>
                  })
                }
                {/* <Page number="1">Page text</Page>
                <Page number="2">Page text</Page>
                <Page number="3">Page text</Page>
                <Page number="4">Page text</Page> */}
            </HTMLFlipBook>
           }
        </div>
    )
}

export default DetailBookPage

export const Page = React.forwardRef((props:any, ref:any) => {
  
    if(props.isStartPage){
     
      return (
        <div 
        className="demoPage rounded rounded-r-none rounded-b-none shadow-sm bg-cover bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]"
        ref={ref}>
       
      </div>
      )
    }
    return (
      <div className="demoPage demoPage rounded rounded-t-none rounded-l-none shadow-sm py-5 px-10 " ref={ref}>
         
          <h1 className='mb-5'>{props.title}</h1>
          <p className='flex flex-1 flex-wrap text-sm text-gray-900'>{props.children}</p>
          <p className='absolute left-36 bottom-1 flex justify-center text-sm text-slate-900'>{props.number}</p>
      </div>
  );
});
export async function getServerSideProps(context:any) {
    
    return {
      props: {
        categoryId:context.query.categoryId,
        bookId:context.query.bookId
      },
    }
  }