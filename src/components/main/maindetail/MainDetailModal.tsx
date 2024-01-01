import * as S from './MainDetailModal.stlye';
// import React, { useState } from 'react';

// Modal.js
type MainDetailModalProps ={
  imageUrl: string;
  itemName: string;
  closeModal: () => void;
}


const Modal:React.FC<MainDetailModalProps> = ({ imageUrl, itemName, closeModal }) => {


  return (
    <S.ModalOverlay onClick={closeModal}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
      <S.ModalClose className="close" onClick={closeModal}>
            &times;
          </S.ModalClose>
        <S.ModalImage src={imageUrl} alt={itemName} />
        <p>{itemName}</p>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
