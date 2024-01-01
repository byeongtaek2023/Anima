import React, { useState } from 'react'
import { AnimeItem } from './AniList';
import * as S from './AniList.style';

type ItemListContainerProps = {
  
    item: AnimeItem;
  }


const ItemListContainer:React.FC<ItemListContainerProps> = ({ item }) => {
    const [currentIndex5, setCurrentIndex5] = useState(0);
        const itemsPerPage = 6;
    const handlePrevClick = () => {
      
        setCurrentIndex5((prevIndex) => (prevIndex - 1 + itemsPerPage) % itemsPerPage);
      };
  
      const handleNextClick = () => {
        setCurrentIndex5((prevIndex) => (prevIndex + 1) % itemsPerPage);
      };
  
    return  (
    <S.ItemListContainer>
      <S.LeftButton onClick={handlePrevClick}>Previous</S.LeftButton>
      {item.item_list?.map((subItem, subIndex) => (
        <S.ItemContainer
          key={subItem.id}
          style={{
            display: subIndex >= currentIndex5 && subIndex < currentIndex5 + itemsPerPage ? 'flex' : 'none',
          }}
        >
          {subItem.images && subItem.images.length > 0 && subItem.images[0].img_url && (
            <S.Image src={subItem.images[0].img_url} alt={subItem.name} />
          )}
          <p>{subItem.name}</p>
        </S.ItemContainer>
      ))}
      <S.RightButton onClick={handleNextClick}>Next</S.RightButton>
    </S.ItemListContainer>
  );
}

export default ItemListContainer