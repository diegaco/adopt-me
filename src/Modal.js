import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalEl = document.querySelector('#modal');

const Modal = ({children}) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalEl.appendChild(elRef.current);
    return () => modalEl.removeChild(elRef.current);
  }, []);

  return createPortal(<div> {children} </div>, elRef.current);
}

export default Modal;
