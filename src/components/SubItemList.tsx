import React, { FC } from 'react';
import * as S from './AniList.style';
import { AnimeItem } from './AniList';

type SubItemListProps = {
  subItems: AnimeItem[]; 
  currentIndex: number;
  itemsPerPage: number;
}

const SubItemList: FC<SubItemListProps> = ({ subItems, currentIndex, itemsPerPage }) => {


    
  return (
    <>
      {subItems.map((subItem, subIndex) => (
        <S.ItemContainer
          key={subItem.id}
          style={{
            display: subIndex >= currentIndex && subIndex < currentIndex + itemsPerPage ? 'flex' : 'none',
          }}
        >
          {subItem.images && subItem.images.length > 0 && subItem.images[0].img_url && (
            <S.Image src={subItem.images[0].img_url} alt={subItem.name} />
          )}
          <p>{subItem.name}</p>
        </S.ItemContainer>
      ))}
    </>
  );
};

export default SubItemList;
