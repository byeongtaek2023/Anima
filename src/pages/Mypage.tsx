import React, { useEffect, useState } from 'react';
import * as St from '../style/MypageStyle';
import { getUserSession } from 'api/supabase/supabase';

const Mypage = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userSessionNickname, setUserSessionNickname] = useState('');
  const [nickname, setnickname] = useState('');
  const [image, setImage] = useState();
  const [email, setEmail] = useState<string>('');
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const data = await getUserSession();
    setCurrentUser(data);
  };

  // console.log(currentUser);

  // 세션 안에 있는 닉네임 가져오는 함수
  const getSession = async () => {
    const session = await getUserSession();
    if (session && session.session) {
      const sessionNickname = session.session.user.user_metadata.nickname;
      const sessionProfileImg = session.session.user.user_metadata.user_image;
      const sessionEmail = session.session.user.email;
      setnickname(sessionNickname);
      setEmail(sessionEmail || '');
      setImage(sessionProfileImg);
    }
    return;
  };
  getSession();

  return (
    <St.ProfileWrapper>
      <St.ProfileBox>
        <St.ImageWrapper>
          <St.ProfileImage></St.ProfileImage>
        </St.ImageWrapper>

        <St.NicknameWrapper>
          <St.Nickname>{nickname}님</St.Nickname>
        </St.NicknameWrapper>
        <St.EmailWrapper>
          <St.Email> {email} </St.Email>
        </St.EmailWrapper>
        <St.LikeBox>
          <St.Like>My Like List ♥️</St.Like>
        </St.LikeBox>
      </St.ProfileBox>
    </St.ProfileWrapper>

    // 좋아요 남긴 기록 넣기
  );
};

export default Mypage;
