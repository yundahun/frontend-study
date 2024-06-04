import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플 데이터 렌더링 해보기
const sampleArticle = {
  title: '제목',
  description: '내용', 
  url: 'https://google.com', 
  urlToImage: 'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList() {
  const { category = 'all' } = useParams();
  console.log(category);

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 API 요청이 대기중인지 판별

  // NewsList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  // useEffect() 안썼을 때 문제점? api 요청 + set함수에 의한 재렌더링 무한 반복
  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        // API 호출 시 카테고리 지정하기
        // 카테고리가 all 일떄는 아무것도 들어가면 안되고, 그 외엔 해당 카테고리 값이 들어감
        // 예시:
        // https://newsapi.org/v2/top-headlines?country=kr&apiKey=942550aa109c4d228a81b9eac5af6286
        // https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=942550aa109c4d228a81b9eac5af6286
        const query = category === 'all' ? '' : `&category=${category}`;

        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=942550aa109c4d228a81b9eac5af6286`);
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, [category]);

  // article 값이 없을 때 렌더링 막기
  // if (!articles) {
  //   return null;
  // }

  // 로딩중일 때 처리
  // 추천: react-spinners 또는 Lottie File 사용
  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}

      {/* {articles && articles.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })} */}
      {/* 또는 옵셔널 체이닝 사용 */}
      {articles?.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default NewsList;