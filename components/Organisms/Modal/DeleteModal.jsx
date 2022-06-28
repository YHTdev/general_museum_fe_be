import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import Iconx from "../../Atoms/Icons/iconx";

// export const ModalTitle = ({ className, children }) => {
//   return (
//     <Dialog.Title
//       as="h3"
//       className={`${
//         className || ""
//       }  flex items-center px-5 py-4 border-b border-slate-100 font-semibold text-slate-800`}>
//       {children}
//     </Dialog.Title>
//   );
// };

// export const ModalBody = ({ className, children }) => {
//   return (
//     <Dialog.Description as="div" className={`${className || ""} px-5 py-4`}>
//       {children}
//     </Dialog.Description>
//   );
// };

export default function DeleteModal({
  className,
  children,
  isModalOpen,
  setIsModalOpen,
  formData,
}) {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 z-40 lg:overflow-y-auto "
          open={isModalOpen}
          onClose={() => setIsModalOpen(true)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-700"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <dialog
                className={`${
                  className || ""
                } inline-block relative w-full max-w-5xl p-6 my-8 overflow-hidden text-left h-full align-middle transition-all transform bg-white text-red-500 border border-red-500 shadow-xl rounded-2xl`}>
                <Dialog.Description
                  as="div"
                  className={`${
                    className || ""
                  } px-5 py-4 flex items-center p-5  space-x-5`}>
                  <div className="w-10 ">
                    <Iconx
                      icon={`ExclamationIcon`}
                      className={`w-10 h-10 shrink-0`}
                    />
                  </div>
                  <div className="flex-auto space-y-3">
                    <h1 className="text-xl font-light uppercase">
                      Are you sure want to delete this
                    </h1>
                    <p>{formData.name}</p>
                    <div className="flex items-center justify-end space-x-6">
                      <button className="py-2 text-yellow-500 border border-yellow-500 rounded-lg shadow-lg px-7">
                        Cancel
                      </button>
                      <button className="py-2 bg-red-500 rounded-lg shadow-lg px-7 text-slate-200">
                        Delete
                      </button>
                    </div>
                  </div>
                </Dialog.Description>

                <div className="absolute top-5 right-5">
                  <button className="" onClick={() => setIsModalOpen(false)}>
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
              </dialog>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
