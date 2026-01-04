const Wrapper = ({ children, className = "" }) => {
  return <div className={`w-full max-w-7xl p-4 m-auto ${className}`}>{children}</div>;
};

export default Wrapper;
