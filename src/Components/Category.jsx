import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../Context/NewsContext";

const Category = () => {
  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleClick = async (e) => {
    const category = e.target.value;
    const data = await fetchNews(`/everything?q=${category}`);
    setNews(data?.articles);
  };

  return (
    <Wrapper className="overflow-x-scroll scroll-smooth scrollbar-none">
      <div className="w-fit m-auto flex items-center ">
        {categories.map((category) => (
          <button
            value={category}
            onClick={handleClick}
            className=" p-2 font-medium hover:bg-blue-500 transition-colors duration-300 rounded-md"
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
