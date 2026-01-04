import { useNewsContext } from "../Context/NewsContext";

const Navbar = () => {
  const { setNews, fetchNews } = useNewsContext();

  let timer = null;
  const searchNews = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) return;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchValue}`);
      setNews(data?.articles);
    }, 1000);
  };

  return (
    <div className="flex justify-between items-center p-4  shadow-md  sticky top-0 z-20 bg-gray-50">
      <div className="cursor-pointer text-3xl font-bold">
        <a
          href="/home"
          className=" border-3 border-blue-500  bg-blue-500 text-white	select-none "
        >
          <span className="px-2">News</span>
          <span className=" text-blue-600 bg-white px-2 ">APP</span>
        </a>
      </div>
      <div className="flex gap-5">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={searchNews}
            type="search"
            required
            placeholder="Search"
          />
        </label>
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
