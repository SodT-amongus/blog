import { blogModal } from "./CreateBlogModal";
import { useNavigate } from "react-router-dom";

export const BlogCard = (props) => {
  const navigate = useNavigate();
  const { blog } = props;

  return (
    <div
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
      style={{
        width: 340,
        height: 460,
        padding: 20,
        borderRadius: 12,
        border: "1px solid rgb(232, 232, 234)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "pointer",
      }}
    >
      <img
        style={{
          height: 240,
          width: 340,
          border: "1px solid rgb(232, 232, 234)",
          borderRadius: 6,
        }}
        src="https://res.cloudinary.com/db4h6fyq3/image/upload/v1734971148/leap/brqpnc7xhso0yf8htrlm.png"
        alt="car"
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          gap: 20,
        }}
      >
        <div>
          <span
            style={{
              border: "1px solid lightgrey",
              color: "rgb(38, 230, 255)",
              padding: 6,
              borderRadius: 4,
              fontSize: 20,
            }}
          >
            {blog.tag}
          </span>
        </div>
        <h2
          style={{
            height: 60,
            overflow: "hidden",
            display: "-webkit-box",
            MozBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {blog.title}
        </h2>
        {blog.createdAt &&
          blog.createdAt.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </div>
    </div>
  );
};
