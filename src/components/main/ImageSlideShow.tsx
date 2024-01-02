import React, { useEffect, useState } from 'react';
import * as S from './ImageSlideShow.style';

import { AnimeItem } from './AniList';



const ImageSlideshow = (props: { data: AnimeItem[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = props.data.slice(0, 5);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.SlideshowContainer>
      <S.PrevButton onClick={handlePrevClick}>Previous</S.PrevButton>
      {images.map((image, index) => (
        <S.SlideshowImage
          key={index}
          src={image.img}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.name}
        />
      ))}
      <S.NextButton onClick={handleNextClick}>Next</S.NextButton>
    </S.SlideshowContainer>
  );
};

export default ImageSlideshow;
