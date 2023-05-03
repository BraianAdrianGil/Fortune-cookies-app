import "./Author.css";

// eslint-disable-next-line react/prop-types
const Author = ({ author }) => {
  return (
    <div className="author__container">
      <p>
        Author: <b>{author}</b>
      </p>
    </div>
  );
};

export default Author;
