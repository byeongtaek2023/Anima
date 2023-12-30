import { supabase } from 'App';

/**
 * /**
 * 유저 정보 가져오기 - DB에 저장되어있는 user의 정보
 * @returns 유저 정보
 */
export const getUserData = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
};

/**
 * 유저 세션 가져오기 - 웹페이지에 머무르는 user의 정보
 * @returns 유저 세션
 */
export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
};
