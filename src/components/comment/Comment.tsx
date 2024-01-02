import { supabase } from 'api/supabase/supabase';
import { useState } from 'react';
import * as St from './CommentStyle';

const Comment = ({ item, currentUser, getCommentList }: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(item.content);

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
    <div>
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
    </div>
  ) : (
    <St.Container key={item.id}>
      <div>
        <St.UserIcon />
      </div>
      <St.UserWrapper style={{ display: 'flex' }}>
        <St.UserInfo>
          <St.UserId>{item.nickname}</St.UserId>
          <div />
          <St.Date> {item.created_at}</St.Date>
        </St.UserInfo>
        <St.CommentWrapper>
          <St.UserComment>{item.content}</St.UserComment>
          {currentUser && (
            <St.ButtonWrapper>
              <St.EditButton
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                수정
              </St.EditButton>
              <St.DeleteButton onClick={() => confirmDelete(item.id)}>삭제</St.DeleteButton>
            </St.ButtonWrapper>
          )}
        </St.CommentWrapper>
      </St.UserWrapper>
    </St.Container>
  );
};

export default Comment;
