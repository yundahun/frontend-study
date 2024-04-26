import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '윤다훈',
    content: 'React란꿈..!'
  },
  {
    name: '최현아',
    content: '클레릭 맛집!!'
  },
  {
    name: '장원석',
    content: '메랜할까 고민중..'
  }
];

// 댓글들을 포함한 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      <Comment name="윤다훈" content="목표는 props 마스터"/>
      <Comment name="최현아" content="메랜 할 사람"/>
      <Comment name="장원석" content="전 운동하겠습니다"/>
      {/* <Comment user = {{name:"윤다훈", content:"React란꿈..!"}}/>
      <Comment user = {{name:"최현아", content:"클레릭 모집합니다"}}/>
      <Comment user = {{name:"장원석", content:"전 운동하겠습니다"}}/> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 
        일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        console.log(index, comment);
        return <Comment key={index} name={comment.name} content={comment.content} />;
      })}

      {/* map() 함수의 결과 */}
      {
        [
          <Comment key={0} name={'윤다훈'} content={'React란꿈..!'} />,
          <Comment key={1} name={'최현아'} content={'클레릭 맛집!!'} />,
          <Comment key={2} name={'장원석'} content={'메랜할까 고민중..'} />
        ]
      }

      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content} />)}
    </div>
  );
}

export default CommentList;