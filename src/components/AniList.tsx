import React, { useEffect, useState } from 'react';
import AniJson from 'xios/anijson';

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
        console.log(dbResponse.data.recomend[0].item_list);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  const renderList = (data: AnimeItem[]) => {
    return data.map((item) => (
      <div key={item.id}>
        <img src={item.img} alt={item.name} width={'300px'} height={'300px'} />
        <p>{item.name}</p>
      </div>
    ));
  };

  const renderList2 = (data: AnimeItem[]) => {
    return data.map((item) => (
      <div key={item.id}>
        {item.images && item.images.length > 0 && item.images[0].img_url && (
          <img src={item.images[0].img_url} alt={item.name} width={'300px'} height={'300px'} />
        )}
        <p>{item.name}</p>
      </div>
    ));
  };

  const renderList3 = (data: AnimeItem[]) => {
    return data.map((item) => (
      <div key={item.id}>
        <h1>{item.name}</h1>
        {item.item_list?.map((item) => (
          <div key={item.id}>
            {item.images && item.images.length > 0 && item.images[0].img_url && (
              <img src={item.images[0].img_url} alt={item.name} width={'300px'} height={'300px'} />
            )}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    ));
  };
  // "id","name","img" //hot re,re2는 형식 안맞음.
  return (
    <div>
      <div>
        <h1>DB Data</h1>
        {renderList(dbData.db)}
      </div>
      <div>
        <h1>Ranking Data</h1>
        {renderList(dbData.ranking)}
      </div>
      <div>
        <h1>Hot Data</h1>
        {renderList2(dbData.hot)}
      </div>

      <div>
        <h1>Recomend Data</h1>
        {renderList3(dbData.recomend)}
      </div>
      <div>
        <h1>Recomend2 Data</h1>
        {renderList3(dbData.recomend2)}
      </div>
    </div>
  );
};
export default React.memo(AniList);
