function PostDetail(props) {
const { posts, currentIndex} = props;

  return (
    <div className="detail">
      <h4>제목: {posts[currentIndex]} </h4>
      <p>날짜: 2023년 3월 19일</p>
      <p>작성자: dahun.yun</p>
      <p>... 상세내용 ...</p>
    </div>
  );
};

export default PostDetail;