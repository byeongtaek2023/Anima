import { getUserSession, supabase } from 'api/supabase/supabase';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Comment = ({ item, getCommentList }: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(item.content);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    checkCurrentUser();
  }, [currentUser]);

  const checkCurrentUser = async () => {
    // 현재 로그인된 사용자의 정보를 가져옵니다.
    const data = await getUserSession();

    setCurrentUser(data.session);
  };

  // 댓글 수정 확인
  const confirmEdit = async (id: string) => {
    // Supabase를 이용하여 댓글을 수정합니다.
    const { error } = await supabase.from('replies').update({ content: content }).match({ id: id });

    if (error) {
      window.alert('댓글 수정 중 오류가 발생했습니다: ' + error.message);
      setIsEditing(false);
    } else {
      window.alert('댓글이 수정되었습니다.');
      setContent({ content: '' }); // 상태 초기화
      getCommentList(); // 댓글 목록 갱신
      setIsEditing(false);
    }
  };

  // 데이터 삭제
  const confirmDelete = async (id: string) => {
    const ok = window.confirm('코멘트를 지우시겠습니까?');
    if (ok) {
      const { error } = await supabase.from('replies').delete().eq('id', id);

      if (error) {
        window.alert('댓글 삭제 중 오류가 발생했습니다: ' + error.message);
      } else {
        window.alert('삭제 완료');
        getCommentList(); // 댓글 목록 갱신
      }
    }
  };

  return isEditing ? (
    <EditingWrapper>
      <input type="text" value={content.content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => confirmEdit(item.id)}>저장</button>
      <button
        onClick={() => {
          setContent(item.content);
          setIsEditing(false);
        }}
      >
        취소
      </button>
    </EditingWrapper>
  ) : (
    <Container key={item.id}>
      <UserIcon>
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" width={40} height={40} alt="" />
      </UserIcon>
      <UserWrapper style={{ display: 'flex' }}>
        <UserInfo>
          <UserId>{item.nickname}</UserId>
          <Date>{item.created_at}</Date>
        </UserInfo>
        <CommentWrapper>
          <UserComment>{item.content}</UserComment>
          {currentUser && (
            <div>
              <button
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                수정
              </button>
              <button onClick={() => confirmDelete(item.id)}>삭제</button>
            </div>
          )}
        </CommentWrapper>
      </UserWrapper>
    </Container>
  );
};

export default Comment;

const EditingWrapper = styled.div`
  input {
    :focus {
      outline: none;
    }
  }
`;
const Container = styled.li`
  display: flex;
  padding: 10px;
  position: relative;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserIcon = styled.div``;
const UserId = styled.p``;
const Date = styled.p`
  font-size: 0.813rem;
  margin-left: 0.125rem;
`;
const CommentWrapper = styled.div`
  margin-top: 0.5rem;
`;
const UserComment = styled.span``;
