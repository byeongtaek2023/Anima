import CommentInput from 'components/comment/CommentInput';
import * as S from './MainDetailModal.stlye';
import Comment from 'components/comment/Comments';
import Replies from 'components/comment/Replies';
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
            {/* X 버튼 */}
            &times;
          </S.ModalClose>
        </div>
        <S.ModalImage src={imageUrl} alt={itemName} />
        <S.AniName>{itemName}</S.AniName>

        <Replies />
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
