import Comment from './Comment';

interface commentParams {
  id: string;
  created_at: string;
  content: string;
  nickname: string;
}

const Comments = ({ commentList, getCommentList }: { commentList: commentParams[]; getCommentList: any }) => {
  return (
    <div>
      <ul>
        {commentList.map((item) => {
          return <Comment item={item} getCommentList={getCommentList} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
