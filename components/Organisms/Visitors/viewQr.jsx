import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ViewQr = ({ viewQrData }) => {
  const componentRef = useRef();
  const qrPrintHandler = useReactToPrint({
    content: () => componentRef.current,
  });
  const pageStyle = `
  @page {
    size: 60mm 20mm;
    // margin: 1mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      display: none;
      // page-break-before: always;
    }
  }
`;

  return (
    <>
      <div ref={componentRef} className="w-48 mx-auto ">
        <style type="text/css" media="print">
          {pageStyle}
        </style>
        <div className="w-40 h-40 ">
          <div className="">
            {/* <div className="w-56 h-36"> */}
            <img src={viewQrData.qrSVG} alt="svg" />
          </div>
          <div className="mt-2 ">
            <p className="">{viewQrData.name}</p>
            <p className="">{viewQrData.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 space-x-5">
        <button
          onClick={qrPrintHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Print
        </button>
      </div>
    </>
  );
};

export default ViewQr;
