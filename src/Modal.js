import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalEl = document.querySelector('#modal');

const Modal = ({children, toggleModal}) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
    elRef.current.className = "fixed w-screen h-screen flex justify-center items-center";
  }

  useEffect(() => {
    modalEl.appendChild(elRef.current);
    return () => modalEl.removeChild(elRef.current);
  }, []);

  const ModalEl = () => (
    <>
      {/* eslint-disable-next-line */}
      <div onClick={toggleModal} className="overlay bg-black opacity-50 w-screen h-screen absolute"></div>
      <div className="relative index-2 p-8 rounded-2xl bg-white w-2/6">
        { children }
      </div>
    </>
  )

  return createPortal(<ModalEl/>, elRef.current);
}

export default Modal;
