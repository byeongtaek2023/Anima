import { supabase } from 'App';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../image/kebab.png';

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

const Comment = () => {
  const [commentList, setCommentList] = useState<commentParams[]>([]);
  const [editComment, setEditComment] = useState<EditComment>({ id: '', content: '' });

  useEffect(() => {
    getCommentList();
  }, []);

  const getCommentList = async () => {
    const { data, error } = await supabase.from('comments').select('*');
    console.log(data);
    if (!error && data) {
      setCommentList(data);
    } else {
      setCommentList([]);
    }
  };
  // 댓글 편집 핸들러
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditComment({ ...editComment, content: e.target.value });
  };
  // 댓글 수정 시작
  const startEdit = (comment: commentParams) => {
    setEditComment({ id: comment.id, content: comment.content });
  };

  // 댓글 수정 확인
  const confirmEdit = async () => {
    if (editComment.id && editComment.content.trim() !== '') {
      const { data, error } = await supabase
        .from('comments')
        .update({ content: editComment.content })
        .match({ id: editComment.id });

      if (!error && data) {
        window.alert('댓글이 수정되었습니다.');
        setEditComment({ id: '', content: '' }); // 상태 초기화
        getCommentList(); // 댓글 목록 갱신
      } else {
        window.alert(error?.message);
      }
    }
  };

  //데이터 삭제
  const confirmDelete = async (id: string) => {
    const ok = window.confirm('코멘트를 지우시겠습니까?');
    if (ok) {
      const { data, error } = await supabase.from('comments').delete().eq('id', id);
      console.log(data);
      if (!error && data) {
        window.alert('삭제되었습니다.');
      } else {
        console.log(error);
        window.alert(error?.message);
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
              {editComment.id === item.id ? (
                // 편집 모드 UI
                <div>
                  <input type="text" value={editComment.content} onChange={handleEditChange} />
                  <button onClick={confirmEdit}>저장</button>
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
                      <div>
                        <UserComment>{item.content}</UserComment>
                        <button onClick={() => startEdit(item)}>수정</button>
                        <button onClick={() => confirmDelete(item.id)}>삭제</button>
                      </div>
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
const MenuList = styled.ul`
  & li {
    position: relative;
    z-index: 999;
    background-color: #cbcbcb;
    padding: 3px;
    cursor: pointer;
  }
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
