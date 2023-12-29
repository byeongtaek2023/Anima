import React, { useEffect, useState } from 'react';
import * as S from './AniList.style';
import AniJson from 'xios/anijson';
import ImageSlideshow from './ImageSlideShow';

type AnimeItem = {
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

  const renderList = (data: AnimeItem[]) => {
    return data.map((item) => (
      <S.ItemContainer key={item.id}>
        <img src={item.img} alt={item.name} width={'300px'} height={'300px'} />
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  const renderList2 = (data: AnimeItem[]) => {
    return data.map((item) => (
      <S.ItemContainer key={item.id}>
        {item.images && item.images.length > 0 && item.images[0].img_url && (
          <img src={item.images[0].img_url} alt={item.name} width={'300px'} height={'300px'} />
        )}
        <p>{item.name}</p>
      </S.ItemContainer>
    ));
  };

  const renderList3 = (data: AnimeItem[]) => {
    return data.map((item) => (
      <S.Container key={item.id}>
        <h1>{item.name}</h1>
        <S.ItemListContainer>
          {item.item_list?.map((item) => (
            <S.ItemContainer key={item.id}>
              {item.images && item.images.length > 0 && item.images[0].img_url && (
                <img src={item.images[0].img_url} alt={item.name} width={'300px'} height={'300px'} />
              )}
              <p>{item.name}</p>
            </S.ItemContainer>
          ))}
        </S.ItemListContainer>
      </S.Container>
    ));
  };
  // "id","name","img" //hot re,re2는 형식 안맞음..

  return (
    <>
      <ImageSlideshow />

      <S.RenderWarp>
        <h1>DB Data</h1>
        <S.renderWarpList>{renderList(dbData.db)}</S.renderWarpList>

        <h1>Ranking Data</h1>
        <S.renderWarpList>{renderList(dbData.ranking)}</S.renderWarpList>

        <h1>Hot Data</h1>
        <S.renderWarpList2>{renderList2(dbData.hot)}</S.renderWarpList2>

        <S.renderWarpList3>{renderList3(dbData.recomend)}</S.renderWarpList3>

        <S.renderWarpList3>{renderList3(dbData.recomend2)}</S.renderWarpList3>
      </S.RenderWarp>
    </>
  );
};
export default React.memo(AniList);
