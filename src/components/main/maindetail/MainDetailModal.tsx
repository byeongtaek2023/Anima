import CommentInput from 'components/CommentInput';
import * as S from './MainDetailModal.stlye';
import Comment from 'components/Comment';
import Replies from 'components/Replies';
// import React, { useState } from 'react';

// Modal.js
type MainDetailModalProps = {
  imageUrl: string;
  itemName: string;
  closeModal: () => void;
};

const Modal: React.FC<MainDetailModalProps> = ({ imageUrl, itemName, closeModal }) => {
  return (
    <S.ModalOverlay onClick={closeModal}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <div>
          <S.ModalClose className="close" onClick={closeModal}>
            &times;
          </S.ModalClose>
        </div>
        <S.ModalImage src={imageUrl} alt={itemName} />
        <p>{itemName}</p>
        <Replies />
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
