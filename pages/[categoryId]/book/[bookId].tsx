import { NextPage } from "next";
import { API } from "../../../lib/services";
import React, { useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { UiHeader } from "../../../components/atoms/UiHeader";
// react-flip-book

const DetailBookPage: NextPage = (props) => {
  const query: any = props;
  const bookId = query.bookId;
  const categoryId = query.categoryId;
  const [book, setBook]: any = useState();
  const i = 1;
  const getBook = useCallback(() => {
    API.get("v1/book/" + bookId)
      .then((res) => {
        if (res.data.statusCode === 200) {
          setBook(res.data.data);
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, [i]);

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
          className="flex justify-center m-20 mx-40 rounded shadow-sm">
          <Page number="0" isStartPage>
            Start Page
          </Page>
          {book.pages.map((p: any, i: any) => {
            return (
              <Page key={i} number={i + 1} title={book.name}>
                {p.desc}
              </Page>
            );
          })}
        </HTMLFlipBook>
      )}
    </div>
  );
};

export default DetailBookPage;

// eslint-disable-next-line react/display-name
export const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <>
      <div
        className="px-10 py-5 bg-white rounded-b-sm rounded-r-sm shadow-sm demoPage "
        ref={ref}>
        <h1 className="mb-5">{props.title}</h1>
        <p className="flex flex-wrap flex-1 text-sm text-gray-900">
          {props.children}
        </p>
        <p className="absolute flex justify-center text-sm left-36 bottom-1 text-slate-900">
          {props.number}
        </p>
      </div>
    </>
  );
});
export async function getServerSideProps(context: any) {
  return {
    props: {
      categoryId: context.query.categoryId,
      bookId: context.query.bookId,
    },
  };
}
