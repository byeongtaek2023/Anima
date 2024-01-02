import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../image/kebab.png';
import { getComment, getUserSession, supabase } from 'api/supabase/supabase';

interface commentParams {
  id: string;
  created_at: string;
  content: string;
  nickname: string;
}

interface EditComment {
  id: string;
  content: string;
}

const Comment = ({ commentList }: { commentList: commentParams[] }) => {
  const [editComment, setEditComment] = useState<EditComment>({ id: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [commentId, setCommentId] = useState(0);
  console.log(editComment);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    // 현재 로그인된 사용자의 정보를 가져옵니다.
    const data = await getUserSession();
    // console.log(data);
    setCurrentUser(data);
  };

  // 댓글 편집 핸들러
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditComment({ ...editComment, content: e.target.value });
  };
  // 댓글 수정 시작
  const startEdit = () => {
    setIsEditing(true);
  };

  // 댓글 수정 확인
  const confirmEdit = async (id: string) => {
    console.log(editComment);
    if (id && editComment.content.trim() !== '') {
      // Supabase를 이용하여 댓글을 수정합니다.
      const { error } = await supabase.from('replies').update({ content: editComment.content }).eq('id', id);

      if (error) {
        window.alert('댓글 수정 중 오류가 발생했습니다: ' + error.message);
        setIsEditing(false);
      } else {
        window.alert('댓글이 수정되었습니다.');
        setEditComment({ id: '', content: '' }); // 상태 초기화
        // CommentList(); // 댓글 목록 갱신
        setIsEditing(false);
      }
    }
  };

  // 데이터 삭제
  const confirmDelete = async (id: string) => {
    const ok = window.confirm('코멘트를 지우시겠습니까?');
    if (ok) {
      // Supabase를 이용하여 댓글을 삭제합니다.
      const { error } = await supabase.from('replies').delete().eq('id', id);

      if (error) {
        window.alert('댓글 삭제 중 오류가 발생했습니다: ' + error.message);
      } else {
        window.alert('삭제 완료');
        // getCommentList(); // 댓글 목록 갱신
      }
    }
  };
  return (
    <div>
      <ul>
        {' '}
        {commentList.map((item) => {
          return (
            <>
              {/* 편집 모드인지 아닌지 상태 관리 */}
              {isEditing ? (
                // 편집 모드 UI
                <div>
                  <input type="text" value={editComment.content} onChange={handleEditChange} />
                  <button onClick={() => confirmEdit(item.id)}>저장</button>
                  <button onClick={() => setEditComment({ id: '', content: '' })}>취소</button>
                </div>
              ) : (
                <Comments key={item.id}>
                  <MenuWrapper>
                    <Img src={Menu} width={20} height={20} alt="메뉴" />
                  </MenuWrapper>

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
                          <button onClick={startEdit}>수정</button>
                          <button onClick={() => confirmDelete(item.id)}>삭제</button>
                        </div>
                      )}
                    </CommentWrapper>
                  </UserWrapper>
                </Comments>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Comment;

const Comments = styled.li`
  display: flex;
  padding: 10px;
  position: relative;
`;
const MenuWrapper = styled.div`
  position: absolute;
  right: 1000px;
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
const Img = styled.img`
  display: none;
`;
