import { atom, selector } from 'recoil';

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  // Token 값이 존재한다면 true return
  // 느낌표 2개를 사용하면 값을 boolean 형태로 변환
  get: ({ get }) => !!get(TokenAtom)
});
