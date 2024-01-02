import styled from 'styled-components';
import leftIcon from '../../image/left_btn2.png';
import rightIcon from '../../image/right_btn.png';

export const RenderWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 80px;
    margin-bottom: 20px;
    margin-left: 26px;
    font-family: 'Tenada';

    @media (min-width: 300px) {
      font-size: 10px;
    }

    @media (min-width: 1024px) {
      font-size: 38px;
    }
  }

  p {
    font-size: 14px;

    @media (min-width: 300px) {
      font-size: 6px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const renderWarpList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderWarpList2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderWarpList3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: center;
  position: relative;
  overflow: hidden;
  font-family: 'Tenada';
`;

export const ItemContainer = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: margin-left 0.3s ease;
  box-sizing: border-box;
  width: 300px;
  margin-left: 10px;

  p {
    margin-top: 30px;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 300px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 80%;
  }
`;

export const Caption = styled.p`
  margin-top: 5px;
`;

export const LeftButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  height: 41vh;
  width: 5vh;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  margin-left: 11px;
  color: white;
`;

export const RightButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  height: 60vh;
  width: 8vh;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%);
  z-index: 2;
`;

export const AniTitle = styled.h1`
  margin-top: 50px;
  margin-left: 25px;
  margin-bottom: 30px;
  font-family: 'Giants-Bold';
`;

export const LeftIcon = styled.span`
  background: url(${leftIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 50%;
  margin-left: -10px;
  margin-top: -17px;
  width: 20px;
  height: 35px;
  text-indent: -9999px;
  font-size: 0;
  z-index: 20;
`;

export const RightIcon = styled.span`
  background: url(${rightIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 50%;
  margin-left: -10px;
  margin-top: -17px;
  width: 20px;
  height: 35px;
  text-indent: -9999px;
  font-size: 0;
  z-index: 20;
`;
