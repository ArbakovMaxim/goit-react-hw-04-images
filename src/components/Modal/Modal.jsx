import { Spiner } from 'components/Spiner/Spiner';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImage } from './Modal.styled';

const rootModal = document.querySelector('#root-modal');

export const Modal = ({ image, closeModal }) => {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    startSpiner();

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const startSpiner = () => {
    setStatus('pedding');
  };

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      {status === 'pedding' && <Spiner />}
      <ModalImage
        onLoad={setStatus('idle')}
        src={image}
        alt="велике зображення"
      />
    </Overlay>,
    rootModal
  );
};
