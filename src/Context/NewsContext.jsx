import { createContext, useContext, useState } from "react";
import api from "../Config/Axios";
import Loader from "../Components/Loader";
const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const fetchNews = async (url = "/everything?q=india") => {
    setLoading(true);
    setError(false)
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      setLoading(false)
    }
  };

  return (
    <NewsContext.Provider value={{ news, setNews, fetchNews, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
