import Feed from "../components/Feed";

function Home() {
  const data = [
    {
      id: 1,
      file: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd1AGu%2FbtrAxilYCEv%2FcbGf06QI40p9e9FWG2fkd0%2Fimg.png",
      caption: "내용입니다~~~",
      likes: 100,
      user: {
        username: "development",
        profileImg:
          "https://wooarts.com/wp-content/uploads/sites/1/nggallery/amazing-beta-fish/amazing-beta-fish-shots-wooarts-01.jpg",
      },
      commentNumber: 33,
      isLiked: true,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "nickname2",
            profileImg:
              "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQ9mLr%2FbtrRjqVhUuN%2FCXBupDdccKJL6pReJJYH5k%2Fimg.png",
          },
        },
        {
          id: 2,
          payload: "두 번째 댓글",
          user: {
            username: "nickname3",
            profileImg:
              "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQ9mLr%2FbtrRjqVhUuN%2FCXBupDdccKJL6pReJJYH5k%2Fimg.png",
          },
        },
      ],
    },
    {
      id: 2,
      file: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd1AGu%2FbtrAxilYCEv%2FcbGf06QI40p9e9FWG2fkd0%2Fimg.png",
      caption: "내용입니다~~~",
      likes: 100,
      user: {
        username: "development",
        profileImg:
          "https://wooarts.com/wp-content/uploads/sites/1/nggallery/amazing-beta-fish/amazing-beta-fish-shots-wooarts-01.jpg",
      },
      commentNumber: 33,
      isLiked: false,
    },
    {
      id: 3,
      file: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd1AGu%2FbtrAxilYCEv%2FcbGf06QI40p9e9FWG2fkd0%2Fimg.png",
      caption: "내용입니다~~~",
      likes: 100,
      user: {
        username: "development",
        profileImg:
          "https://wooarts.com/wp-content/uploads/sites/1/nggallery/amazing-beta-fish/amazing-beta-fish-shots-wooarts-01.jpg",
      },
      commentNumber: 33,
      isLiked: true,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "nickname2",
            profileImg:
              "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQ9mLr%2FbtrRjqVhUuN%2FCXBupDdccKJL6pReJJYH5k%2Fimg.png",
          },
        },
        {
          id: 2,
          payload: "두 번째 댓글",
          user: {
            username: "nickname3",
            profileImg:
              "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQ9mLr%2FbtrRjqVhUuN%2FCXBupDdccKJL6pReJJYH5k%2Fimg.png",
          },
        },
      ],
    },
  ];

  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;
