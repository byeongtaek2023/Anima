
import * as S from './MainDetailModal.stlye'
import React from 'react';
import './Modal.css'; // 모달 스타일을 정의한 CSS 파일

type MainDetailModalProps = {
  toggleModal: () => void;
}

const MainDetailModal:React.FC<MainDetailModalProps>= ({toggleModal}) => {
  



  return (
    <div>
      <S.ModalOverlay  onClick={toggleModal}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          <S.ModalClose className="close" onClick={toggleModal}>
            &times;
          </S.ModalClose>
          {/* <WriteModalSearch setSelectVideo={setSelectVideo} selectVideo={selectVideo} toggleModal={toggleModal} /> */}
        </S.ModalContent>
      </S.ModalOverlay>
    </div>
  );
};

export default MainDetailModal;
