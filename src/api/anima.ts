import React from 'react';

const anima = () => {
  //useQuery 세팅 예시

  // import axios from "axios";

  // // 공통으로 뺐어요(물론 .env를 쓰는게 더 바람직해요)
  // const SERVER_URI = "http://localhost:4000";

  // const getTodos = async () => {
  //   const response = await axios.get(`${SERVER_URI}/todos`);
  //   return response.data;
  // };

  // const addTodo = async (newTodo) => {
  //   await axios.post(`${SERVER_URI}/todos`, newTodo);
  // };

  // export { getTodos, addTodo };

  //==================================================================
  // 쿼리 invalidation 사용 예시

  // import { addTodo } from "../../../api/todos";
  // import { QueryClient, useMutation } from "react-query";
  // .g

  // function Input() {
  // ...
  //     const queryClient = new QueryClient();

  //     const mutation = useMutation(addTodo, {
  //       onSuccess: () => {
  //         // Invalidate and refresh
  //         // 이렇게 하면, todos라는 이름으로 만들었던 query를
  //         // invalidate 할 수 있어요.
  //         queryClient.invalidateQueries("todos");
  //       },
  //   });

  // Mutation.mutate()

  //===========================================================
  // const { isLoading, isError, data } = useQuery("todos", getTodos);

  // if (isLoading) {
  //   return <p>로딩중입니다....!</p>;
  // }

  // if (isError) {
  //   return <p>오류가 발생하였습니다...!</p>;
  return null;
};

export default anima;
