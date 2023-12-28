import axios from 'axios';
import { utubeApi } from 'xios/utube';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
// import * as S from '../ost/OstStlye';
type Utube = {};

const Ost = () => {
  const [utubeData, setUtubeDats] = useState<any>([]);

  useEffect(() => {
    async function getUtube() {
      const date = await axios.get(`${utubeApi}&q=Animation ost`);
      setUtubeDats(date.data.items);
    }
    getUtube();
  }, []);

  console.log('데이터받아오니', utubeData);
  // id.playlistId
  // id.videoId
  // snippet.title
  // snippet.thumbnails.high
  return (
    <>
      {utubeData &&
        utubeData?.map((item: any) => {
          return (
            <div key={item.id}>
              {/* // 비디오를 보여주는 부분 */}
              <YouTube
                //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                videoId={item.id.videoId}
                //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                //밑에서 더 설명하겠습니다.
                opts={{
                  width: '560',
                  height: '315',
                  playerVars: {
                    autoplay: 0, //자동재생
                    modestbranding: 1 // 컨트롤 바에 youtube 로고를 표시하지 않음
                  }
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
              {/* // 이미지를 보여주는 부분 */}
              <img src={item.snippet.thumbnails.high.url} alt="앨범이미지" />
            </div>
          );
        })}
    </>
  );
};

export default Ost;
