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

  console.log(currentUser);

  // 세션 안에 있는 닉네임,이메일 가져오는 함수
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
  console.log(nickname);

  // 댓글 가져오는 함수

  return (
    <>
      <St.ProfileWrapper>
        <St.ProfileBox>
          <St.ImageWrapper>
            <St.ProfileImage></St.ProfileImage>
          </St.ImageWrapper>

          <St.NicknameWrapper>
            <St.UserNickname>{nickname}님</St.UserNickname>
          </St.NicknameWrapper>
          <St.EmailWrapper>
            <St.Email> {email} </St.Email>
          </St.EmailWrapper>
          <St.CommentTitleBox>
            <St.CommentTitle>My Comment List ♥️</St.CommentTitle>
          </St.CommentTitleBox>
        </St.ProfileBox>
      </St.ProfileWrapper>

      <St.CommentWrapper>
        <St.CommentAvatarBox>
          <St.Avatar>아바타 이미지</St.Avatar>
        </St.CommentAvatarBox>
        <St.Nickname>닉네임</St.Nickname>
        <St.Comment></St.Comment>
      </St.CommentWrapper>
    </>

    // 좋아요 남긴 기록 넣기
  );
};

export default Mypage;
