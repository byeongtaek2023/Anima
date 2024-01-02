import React, { useEffect, useState } from 'react';
import * as S from './AniList.style';
import AniJson from 'xios/anijson';
import ImageSlideshow from './ImageSlideShow';
import ItemListContainer from './ItemListContainer';
import Modal from './maindetail/MainDetailModal';

export type AnimeItem = {
  id: number;
  name: string;
  img: string;
  images?: { img_url: string }[];
  img_url?: string;
  item_list?: AnimeItem[]; // Add this line to include item_list
};
const AniList: React.FC = () => {
  const [dbData, setDbData] = useState({
    db: [],
    hot: [],
    ranking: [],
    recomend: [],
    recomend2: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbResponse = await AniJson.get('/db');
        setDbData(dbResponse.data);
        // console.log(dbResponse.data.recomend[0].item_list);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);
  type ModalData = {
    isOpen: boolean;
    imageUrl: string;
    itemName: string;
  };
  //모달데이터
  const [modalData, setModalData] = useState<ModalData>({ isOpen: false, imageUrl: '', itemName: '' });

  const openModal = (imageUrl: string, itemName: string) => {
    setModalData({ isOpen: true, imageUrl, itemName });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, imageUrl: '', itemName: '' });
  };

  //랜더1번
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImagesToShow = 5;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImagesToShow) % totalImagesToShow);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImagesToShow);
  };

  const renderCarouselItems = (getData: () => AnimeItem[]) => {
    const data = getData(); // 함수를 호출하여 데이터를 가져오고, 이를 data 변수에 저장하는 부분
    const startIndex = currentIndex;
    const endIndex = (currentIndex + totalImagesToShow) % data.length;

    const carouselItems = data.slice(startIndex, endIndex + 1);

    return carouselItems.map((item) => (
      <S.ItemContainer key={item.id} onClick={() => openModal(item.img, item.name)}>
        <S.Image src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  //랜더 2번
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const totalImagesToShow2 = 5;

  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex - 1 + totalImagesToShow2) % totalImagesToShow2);
  };

  const handleNext2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % totalImagesToShow2);
  };

  const renderCarouselItems2 = (getData: () => AnimeItem[]) => {
    const data = getData(); // 함수를 호출하여 데이터를 가져오고, 이를 data 변수에 저장하는 부분
    const startIndex = currentIndex2;
    const endIndex = (currentIndex2 + totalImagesToShow2) % data.length;

    const carouselItems = data.slice(startIndex, endIndex + 1);

    return carouselItems.map((item) => (
      <S.ItemContainer key={item.id} onClick={() => openModal(item.img, item.name)}>
        <S.Image src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  // 랜더 3번
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const totalImagesToShow3 = 5;

  const handlePrev3 = () => {
    setCurrentIndex3((prevIndex) => (prevIndex - 1 + totalImagesToShow3) % totalImagesToShow3);
  };

  const handleNext3 = () => {
    setCurrentIndex3((prevIndex) => (prevIndex + 1) % totalImagesToShow3);
  };

  const renderCarouselItems3 = (getData: () => AnimeItem[]) => {
    const data = getData(); // 함수를 호출하여 데이터를 가져오고, 이를 data 변수에 저장하는 부분
    const startIndex = currentIndex3;
    const endIndex = (currentIndex3 + totalImagesToShow3) % data.length;

    const carouselItems = data.slice(startIndex, endIndex + 1);

    return carouselItems.map((item) => (
      <S.ItemContainer key={item.id} onClick={() => openModal(item.images?.[0]?.img_url || '', item.name)}>
        {item.images && item.images.length > 0 && item.images[0].img_url && (
          <S.Image src={item.images[0].img_url} alt={item.name} />
        )}
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  //랜더 리스트 동적//
  const renderList3 = (getData: () => AnimeItem[]) => {
    const data = getData();
    return data.map((item, index) => (
      <S.Container key={item.id}>
        <h1>{item.name}</h1>
        <S.Container key={item.id}>
          <ItemListContainer item={item} openModal={openModal} />
        </S.Container>
      </S.Container>
    ));
  };

  // "id","name","img" //hot re,re2는 형식 안맞음.

  return (
    <>
      <ImageSlideshow />
      <S.RenderWarp>
        <S.Container>
          {modalData.isOpen && (
            <Modal imageUrl={modalData.imageUrl} itemName={modalData.itemName} closeModal={closeModal} />
          )}
          <h1>DB Data</h1>
          <S.ItemListContainer>
            <S.LeftButton onClick={handlePrev}>Prev</S.LeftButton>
            {renderCarouselItems(() => dbData.db)}
            <S.RightButton onClick={handleNext}>Next</S.RightButton>
          </S.ItemListContainer>
          <h1>Ranking Data</h1>
          <S.ItemListContainer>
            <S.LeftButton onClick={handlePrev2}>Prev</S.LeftButton>
            {renderCarouselItems2(() => dbData.ranking)}
            <S.RightButton onClick={handleNext2}>Next</S.RightButton>
          </S.ItemListContainer>
          <h1>Hot data</h1>
          <S.ItemListContainer>
            <S.LeftButton onClick={handlePrev3}>Prev</S.LeftButton>
            {renderCarouselItems3(() => dbData.hot)}
            <S.RightButton onClick={handleNext3}>Next</S.RightButton>
          </S.ItemListContainer>
          {renderList3(() => dbData.recomend)}
          {renderList3(() => dbData.recomend2)}
        </S.Container>
      </S.RenderWarp>
    </>
  );
};
export default React.memo(AniList);
