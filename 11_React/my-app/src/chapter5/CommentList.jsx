import React from 'react';
import Comment from './Comment';

// 댓글들을 포함한 컴포넌트
function CommentList(props) {
  return (
    <div>
      <Comment name="윤다훈" content="목표는 props 마스터"/>
      <Comment name="최현아" content="메랜 할 사람"/>
      <Comment name="장원석" content="전 운동하겠습니다"/>

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
    </div>
  );
}

export default CommentList;