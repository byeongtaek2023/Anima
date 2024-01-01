import React, { useEffect, useState } from 'react';
import * as S from './AniList.style';
import AniJson from 'xios/anijson';
import ImageSlideshow from './ImageSlideShow';

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

  // useEffect(() => {
  //   const interval = setInterval(handleNext, 3000); // Auto slide every 3 seconds (adjust as needed)

  //   return () => clearInterval(interval);
  // }, []); // Run effect only once on component mount

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
      <S.ItemContainer key={item.id}>
        <img src={item.img} alt={item.name}  />
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
      <S.ItemContainer key={item.id}>
        <S.Image src={item.img} alt={item.name}  />
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
      <S.ItemContainer key={item.id}>
        {item.images && item.images.length > 0 && item.images[0].img_url && (
          <S.Image src={item.images[0].img_url} alt={item.name}  />
        )}
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  // 랜더 4번
  // const [currentIndex4, setCurrentIndex4] = useState(0);
  // const totalImagesToShow4 = 5;
  // const renderCarouselItems4 = (getData: () => AnimeItem[]) => {
  //   const data = getData();
  //   const totalItems = data.length;
  //   console.log(currentIndex4);
  //   const startIndex = currentIndex4;
  //   const endIndex = (startIndex + totalImagesToShow4 - 1) % totalItems;

  //   const carouselItems = [];

  //   if (endIndex >= startIndex) {
  //     carouselItems.push(...data.slice(startIndex, endIndex + 1));
  //   } else {
  //     carouselItems.push(...data.slice(startIndex), ...data.slice(0, endIndex + 1));
  //   }

  //   const handlePrev4 = () => {
  //     setCurrentIndex4((prevIndex) => (prevIndex - 1 + totalImagesToShow4) % totalImagesToShow4);
  //   };

  //   const handleNext4 = () => {
  //     setCurrentIndex4((prevIndex) => (prevIndex + 1) % totalImagesToShow4);
  //   };

  //   const currentCarouselItem = carouselItems[currentIndex4];

  //   return (
  //     <>
  //       <S.RenderWarp>{currentCarouselItem && <h1>{currentCarouselItem.name}</h1>}</S.RenderWarp>

  //       <S.ItemListContainer>
  //         <button onClick={handlePrev4}>이전</button>
  //         <S.renderWarpList>
  //           {currentCarouselItem?.item_list?.map((subItem, index) => (
  //             <S.ItemContainer key={subItem.id}>
  //               {subItem.images && subItem.images.length > 0 && subItem.images[0].img_url && (
  //                 <img src={subItem.images[0].img_url} alt={subItem.name}  />
  //               )}
  //               <p>{subItem.name}</p>
  //             </S.ItemContainer>
  //           ))}
  //         </S.renderWarpList>
  //         <button onClick={handleNext4}>다음</button>
  //       </S.ItemListContainer>
  //     </>
  //   );
  // };

  //==================================================================
  // const renderList2 = (data: AnimeItem[]) => {
  //   return data.map((item) => (
  //     <S.ItemContainer key={item.id}>
  //       {item.images && item.images.length > 0 && item.images[0].img_url && (
  //         <img src={item.images[0].img_url} alt={item.name}  />
  //       )}
  //       <p>{item.name}</p>
  //     </S.ItemContainer>
  //   ));
  // };

  // const renderList3 = (data: AnimeItem[]) => {
  //   return data.map((item) => (
  //     <S.Container key={item.id}>
  //       <h1>{item.name}</h1>
  //       <S.ItemListContainer>
  //         {item.item_list?.map((item) => (
  //           <S.ItemContainer key={item.id}>
  //             {item.images && item.images.length > 0 && item.images[0].img_url && (
  //               <img src={item.images[0].img_url} alt={item.name}  />
  //             )}
  //             <p>{item.name}</p>
  //           </S.ItemContainer>
  //         ))}
  //       </S.ItemListContainer>
  //     </S.Container>
  //   ));
  // };
  // const [currentIndex5, setCurrentIndex5] = useState(0);
  // const renderList3 = (getData: () => AnimeItem[]) => {
  //   const data = getData();

  //   const handlePrevClick = () => {
  //     setCurrentIndex5((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  //   };

  //   const handleNextClick = () => {
  //     setCurrentIndex5((prevIndex) => (prevIndex + 1) % data.length);
  //   };

  //   return data.map((item, index) => (
  //     <S.Container key={item.id}>
  //       <h1>{item.name}</h1>
  //       <S.ItemListContainer>
  //         <S.LeftButton onClick={() => handlePrevClick()}>Previous</S.LeftButton>
  //         {item.item_list?.map((subItem, subIndex) => (
  //           <>
  //             <S.ItemContainer
  //               key={subItem.id}
  //               style={{ display: subIndex >= currentIndex5 && subIndex < currentIndex5 + 6 ? 'flex' : 'none' }}
  //             >
  //               {subItem.images && subItem.images.length > 0 && subItem.images[0].img_url && (
  //                 <img src={subItem.images[0].img_url} alt={subItem.name}  />
  //               )}
  //               <p>{subItem.name}</p>
  //             </S.ItemContainer>
  //           </>
  //         ))}
  //         <S.RightButton onClick={() => handleNextClick()}>Next</S.RightButton>
  //       </S.ItemListContainer>
  //     </S.Container>
  //   ));
  // };
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const renderList3 = (getData: () => AnimeItem[]) => {
    const data = getData();
    const itemsPerPage = 6;

    const handlePrevClick = () => {
      setCurrentIndex5((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleNextClick = () => {
      setCurrentIndex5((prevIndex) => (prevIndex + 1) % data.length);
    };

    return data.map((item, index) => (
      <S.Container key={item.id}>
        <h1>{item.name}</h1>
        <S.ItemListContainer>
          <S.LeftButton onClick={() => handlePrevClick()}>Previous</S.LeftButton>
          {item.item_list?.map((subItem, subIndex) => (
            <S.ItemContainer
              key={subItem.id}
              style={{
                display: subIndex >= currentIndex5 && subIndex < currentIndex5 + itemsPerPage ? 'flex' : 'none'
              }}
            >
              {subItem.images && subItem.images.length > 0 && subItem.images[0].img_url && (
                <S.Image src={subItem.images[0].img_url} alt={subItem.name}  />
              )}
              <p>{subItem.name}</p>
            </S.ItemContainer>
          ))}
          <S.RightButton onClick={() => handleNextClick()}>Next</S.RightButton>
        </S.ItemListContainer>
      </S.Container>
    ));
  };

  // "id","name","img" //hot re,re2는 형식 안맞음.

  return (
    <>
      <ImageSlideshow />
      <S.RenderWarp>
        <S.Container>
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
          {/* {renderCarouselItems4(() => dbData.recomend2)} */}
        </S.Container>
      </S.RenderWarp>
    </>
  );
};
export default React.memo(AniList);
