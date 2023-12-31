import styled from 'styled-components';
import LoginImg_1 from '../assets/images/loginImg-1.jpg';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${LoginImg_1});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  min-width: 1280px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid;
  width: 500px;
  height: 460px;
  border-radius: 20px;
`;

export const LoginTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  gap: 14px;
`;

export const RegisterTitle = styled.h2`
  font-family: 'ONE-Mobile-Title';
  font-size: 36px;
  margin-top: 30px;
  margin-bottom: 3px;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #5199f5;
  }
`;

export const LoginTitle = styled.div`
  font-family: 'ONE-Mobile-Title';
  font-size: 36px;
  margin-top: 30px;
  color: #fff;
  margin-bottom: 3px;
`;

// ID / Password styles

export const IdInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  letter-spacing: 1px;
  margin-top: 32px;
  color: #fff;
`;

export const IdLabel = styled.label`
  font-size: 15px;
`;

export const IdInput = styled.input`
  all: unset;
  font-size: 17px;
  padding: 15px;
  text-align: left;
  margin-left: 10px;
  width: 340.19px;
  border-bottom: 1px solid #616060;

  &:focus {
    border-bottom: 1px solid #5199f5;
    caret-color: #5199f5;
    color: #fff;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`;

export const PasswordInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  letter-spacing: 1px;
  margin-top: 20px;
  color: #fff;
`;

export const PasswordLabel = styled.label`
  font-size: 15px;
  color: #fff;
`;

export const PasswordInput = styled.input`
  all: unset;
  font-size: 17px;
  padding: 15px;
  text-align: left;
  width: 340.19px;
  border-bottom: 1px solid #616060;

  &:focus {
    border-bottom: 1px solid #5199f5;
    caret-color: #5199f5;
    color: #fff;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`;

export const LoginButton = styled.button`
  all: unset;
  color: #fff;
  font-weight: 700;
  background-color: #4373bf;
  font-size: 20px;
  width: 250px;
  border-radius: 10px;
  padding: 15px;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    background-color: #3e69ad;
    color: #fff;
  }
`;

export const RegisterButton = styled.button`
  all: unset;
  color: #fff;
  font-size: 15px;
  margin-top: 14px;

  &:hover {
    cursor: pointer;
    color: #5199f5;
  }
`;
export const SpaceRegex = styled.div`
  color: white;
  font-size: 20px;
`;
