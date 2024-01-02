import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient, PostgrestResponse, SupabaseClient } from '@supabase/supabase-js';
import { Navigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
// supabase를 사용할 때 필요한 부분은 언제든 꺼내 쓸 수 있게 이 파일에 정리했습니다.

interface EditComment {
  id: string;
  content: string;
}

// 세션 받아오기
export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
};

// QueryClient를 생성
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL!, process.env.REACT_APP_SUPABASE_ANON_KEY!);
export const queryClient = new QueryClient();

// 로그인
export const loginHandler = async (email: string, password: string) => {
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return data;
};

// 로그아웃
// Header.tsx 에서 사용
export const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    // 로그아웃 될 때 유저 정보 지우기
    sessionStorage.removeItem('user');
    if (error) throw error;
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

// 회원가입
export const registerClick = async (email: string, password: string, nickname: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: nickname,
          user_image:
            'https://mrzjkibhsbvwscaesazp.supabase.co/storage/v1/object/public/avatars/default%20image/avatar.png'
        }
      }
    });
    return { data, error };
  } catch (error) {
    console.error(error);
  }
};

export const insertUserData = async (email: string, nickname: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email: email,
          nickname,
          user_image:
            'https://mrzjkibhsbvwscaesazp.supabase.co/storage/v1/object/public/avatars/default%20image/avatar.png'
        }
      ])
      .select();
  } catch (error) {
    console.error(error);
  }
};

// comment 추가하는 부분 / commentInput.tsx
export const commentInsert = async (text: string) => {
  console.log(text);
  const session = localStorage.getItem('sb-mrzjkibhsbvwscaesazp-auth-token');

  if (session) {
    const parseSession = JSON.parse(session);
    const { data, error } = await supabase.from('replies').insert({
      nickname: 'nickname',
      content: text,
      user_id: parseSession?.user?.id
    });
  }
};

// comment.tsx 에서 사용
export const getComment = async () => {
  const { data, error } = await supabase.from('replies').select('*');
  return { data, error };
};

// 댓글 수정
export const confirmEditComment = async (editComment: EditComment) => {
  const { data, error } = await supabase
    .from('replies')
    .update({ content: editComment.content })
    .match({ id: editComment.id });

  return { data, error };
};

// 댓글 삭제
export const confirmDeleteComment = async (id: string) => {
  const { data } = await supabase.from('replies').delete().eq('id', id);
  return data;
};

// Home.tsx에서 사용
export const getUserData = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
};
