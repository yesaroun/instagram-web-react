import Feed from "../components/Feed";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/feeds/");
  }, []);
  return (
    <div>
      {/*{data?.map((feed) => (*/}
      {/*  <Feed key={feed.id} {...feed} />*/}
      {/*))}*/}
    </div>
  );
}

export default Home;
