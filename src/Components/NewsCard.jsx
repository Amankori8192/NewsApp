import Wrapper from "./Wrapper";
import Button from "./Button";
import { useNewsContext } from "../Context/NewsContext";
import { useEffect } from "react";
import Loader from "./Loader";

const NewsCard = () => {
  const { news, setNews, fetchNews, loading, error } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data?.articles);
    })();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Wrapper>
          <h1 className=" text-red-500 text-5xl flex justify-center items-center">
            Something Went Wrong.
          </h1>
        </Wrapper>
      )}
      {
        <Wrapper className="flex flex-wrap gap-5">
          {news.map((newsDetails, index) => (
            <Card key={index} details={newsDetails} />
          ))}
        </Wrapper>
      }
    </>
  );
};

const Card = ({ details }) => {
  return (
    <div className="card w-96 m-auto shadow-sm hover:shadow-lg transition-all duration-300 ">
      <figure>
        <img
          className="aspect-video"
          src={details?.urlToImage}
          alt="Loading..."
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">{details?.description}</p>
        <div className="card-actions justify-end">
          <Button
            onClick={() => window.open(details.url)}
            className="btn border-none "
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
