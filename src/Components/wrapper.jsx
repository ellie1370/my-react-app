const wrapper = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  );
};

export default wrapper;