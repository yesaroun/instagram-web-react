import Feed from "../components/Feed";
import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log(data);

  // useEffect(() => {
  //   console.log("Home use effect");
  //   // axios("http://127.0.0.1:8000/api/v1/feeds/");
  // }, []);

  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;
