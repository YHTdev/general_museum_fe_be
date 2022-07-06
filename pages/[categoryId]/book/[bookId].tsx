import { NextPage } from 'next'
import { API } from '../../../lib/services'
import React, { useState, useCallback, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { UiHeader } from '../../../components/atoms/UiHeader'
import { HTMLComponent } from 'react-typescript-raw-html'
// react-flip-book

const DetailBookPage: NextPage = (props:any) => {
  
  const [book, setBook]: any = useState()
  const bookId = props.bookId;
  
  const categoryId = props.categoryId
  const getBook = useCallback(() => {
    API.get(`/v1/book/getbook?bookId=${bookId}&categoryId=${categoryId}`)
      .then((res) => {
        if (res.data.statusCode === 200) {
          setBook(res.data.data);
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }, [bookId])

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    <div className="fixed flex flex-col items-center content-center justify-center w-full min-h-screen px-2 py-2 bg-slate-900">
      {book && book.name && <UiHeader title={book.name} />}

      {book && book.pages && (
        <HTMLFlipBook
          width={600}
          showPageCorners={true}
          startPage={0}
          disableFlipByClick={true}
          style={{}}
          height={730}
          size="fixed"
          minWidth={600}
          minHeight={730}
          maxWidth={600}
          maxHeight={730}
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
          className='m-20 rounded shadow-sm  flex justify-center mx-40'
        >
          <Page number='' isStartPage>
            
          </Page>
          {book.pages.map((p: any, i: any) => {
            return (
              <Page key={i} number={i + 1} title={book.name}>
                <HTMLComponent 
                  rawHTML={p.desc}
                />
              </Page>
            );
          })}
        </HTMLFlipBook>
      )}
    </div>
  );
};


export async function getServerSideProps(context:any) {
  console.log(context.query)
  return {
    props: {
      categoryId: context.query.categoryId,
      bookId: context.query.bookId,
    
    },
  }
}

export default DetailBookPage;

// eslint-disable-next-line react/display-name
export const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      className='demoPage bg-white rounded-r-sm rounded-b-sm shadow-md py-5 px-10 '
      ref={ref}
    >
      <h1 className='mb-5'>{props.title}</h1>
      <p className='flex flex-1 flex-wrap text-sm leading-7 text-gray-900 book_container'>
        {props.children}
      </p>
      <p className='absolute left-2/4 bottom-1 flex justify-center text-sm text-slate-900'>
        {props.number}
      </p>
    </div>
  )
})
