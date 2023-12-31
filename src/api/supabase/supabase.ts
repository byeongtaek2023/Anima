import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Navigate } from 'react-router-dom';

interface EditComment {
  id: string;
  content: string;
}

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

// 회원가입
export const registerClickHandler = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });
    // if (email_regex.test(email) === false) {
    //   return alert('이메일 형식이 올바르지 않습니다.');
    // } else if (data?.user) {
    //   return console.log('회원가입 성공'), alert('회원가입 성공!'), navigate('/login');
    // }
  } catch (error) {
    console.error(error);
  }
};

// comment 추가하는 부분 / commentInput.tsx
export const commentInsert = async (text: string) => {
  const { data, error } = await supabase.from('comments').insert({
    nickname: 'test',
    content: text
  });
};

// comment.tsx 에서 사용
export const getComment = async () => {
  const { data, error } = await supabase.from('comments').select('*');
  return { data, error };
};

// 댓글 수정
export const confirmEditComment = async (editComment: EditComment) => {
  const { data, error } = await supabase
    .from('comments')
    .update({ content: editComment.content })
    .match({ id: editComment.id });

  return { data, error };
};

// 댓글 삭제
export const confirmDeleteComment = async (id: string) => {
  const { data } = await supabase.from('comments').delete().eq('id', id);
  return data;
};

// Header.tsx 에서 사용
export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  console.log(data);
  if (error) throw error;
  return data;
};

export const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

// Home.tsx에서 사용
export const getUserData = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
};
