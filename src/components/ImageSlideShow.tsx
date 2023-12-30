import React, { useEffect, useState } from 'react';
import * as S from './ImageSlideShow.style';
import karinaImg from '../assets/pre/karina.jpg';
import WinterImg from '../assets/pre/winter.jpg';
import JijelImg from '../assets/pre/Jijel.jpg';
import NingNingImg from '../assets/pre/NingNing.jpg';

const images = [
  { image: karinaImg, alt: 'Karina' },
  { image: WinterImg, alt: 'Winter' },
  { image: JijelImg, alt: 'Jijle' },
  { image: NingNingImg, alt: 'NingNing' }
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          src={image.image}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.alt}
        />
      ))}
      <S.NextButton onClick={handleNextClick}>Next</S.NextButton>
    </S.SlideshowContainer>
  );
};

export default ImageSlideshow;
