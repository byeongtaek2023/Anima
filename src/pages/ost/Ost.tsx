import axios from 'axios';
import { utubeApi } from 'xios/utube';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import * as S from './Ost.Stlye';
import ScrollToTop from 'components/scrolltop/ScrollToTop';

const Ost = () => {
  const [utubeData, setUtubeData] = useState<any>([]);
  const [videoStates, setVideoStates] = useState<{ [videoId: string]: boolean }>({});
  const [videoWidth, setVideoWidth] = useState<{ [videoId: string]: number }>({});
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('애니메이션 ost');

  useEffect(() => {
    async function getUtube() {
      const response = await axios.get(`${utubeApi}&q=${searchTerm}`);
      setUtubeData(response.data.items);
    }

    getUtube();
  }, [searchTerm]);

  const handleItemClick = (videoId: string) => {
    setVideoStates((prevStates) => ({
      ...prevStates,
      [videoId]: !prevStates[videoId] // Toggle the video state on each click
    }));

    setVideoWidth((prevWidths) => ({
      ...prevWidths,
      [videoId]: 0
    }));

    const interval = setInterval(() => {
      setVideoWidth((prevWidths) => {
        const currentWidth = prevWidths[videoId];
        if (currentWidth < 500) {
          return {
            ...prevWidths,
            [videoId]: currentWidth + 10
          };
        } else {
          clearInterval(interval);
          return {
            ...prevWidths,
            [videoId]: 500
          };
        }
      });
    }, 16);
  };

  const handleMouseLeave = (videoId: string) => {
    setVideoStates((prevStates) => ({
      ...prevStates,
      [videoId]: false
    }));
  };

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  const handlePause = () => {
    setIsVideoPlaying(false);
  };

  const handleButtonClick = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <div>
        <h1>애니메이션 OST 선택</h1>
        <S.ButtonWrapper>
          <S.StyledButton onClick={() => handleButtonClick('슬플때 듣는 애니메이션 ost')}>슬픔 </S.StyledButton>
          <S.StyledButton onClick={() => handleButtonClick('신날때 듣는 애니메이션 ost')}>신남 </S.StyledButton>
          <S.StyledButton onClick={() => handleButtonClick('운동할때 듣는 애니메이션 ost')}>운동 </S.StyledButton>
          <S.StyledButton onClick={() => handleButtonClick('공부할때   듣는 애니메이션 ost')}>공부</S.StyledButton>
          <S.StyledButton onClick={() => handleButtonClick('행복할때 듣는 애니메이션 ost')}>행복</S.StyledButton>
          <S.StyledButton onClick={() => handleButtonClick('로맨스 애니메이션 ost')}>로맨스</S.StyledButton>
        </S.ButtonWrapper>
      </div>
      <br />
      <S.GridContainer>
        {utubeData &&
          utubeData.map((item: any) => (
            <S.ItemContainer
              key={item.id}
              onClick={() => handleItemClick(item.id.videoId)}
              onMouseLeave={() => handleMouseLeave(item.id.videoId)}
            >
              <div>
                {videoStates[item.id.videoId] ? (
                  <YouTube
                    videoId={item.id.videoId}
                    opts={{
                      width: `${videoWidth[item.id.videoId]}`,
                      height: '315',
                      playerVars: {
                        rel: 0,
                        modestbranding: 1,
                        autoplay: 1
                      }
                    }}
                    onEnd={(e) => {
                      e.target.stopVideo(0);
                    }}
                    onPause={handlePause}
                    onPlay={handlePlay}
                  />
                ) : (
                  <img src={item.snippet.thumbnails.high.url} alt="앨범이미지" />
                )}
              </div>
            </S.ItemContainer>
          ))}
        {isVideoPlaying && <div>{/* Additional content to display while video is playing, if needed */}</div>}
        <ScrollToTop />
      </S.GridContainer>
    </>
  );
};

export default Ost;
