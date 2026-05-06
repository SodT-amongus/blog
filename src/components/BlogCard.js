import { blogModal } from "./CreateBlogModal";
import { useNavigate } from "react-router-dom";

export const BlogCard = (props) => {
  const navigate = useNavigate();
  const { blog } = props;

  return (
    <div
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
      style={{
        width: 300,
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
      <div
        style={{
          height: 240,
          width: 300,
          border: "1px solid rgb(232, 232, 234)",
          borderRadius: 6,
          backgroundImage: `url(${
            blog.imageURL || "https://picsum.photos/seed/picsum/536/354"
          })`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 20,
          gap: 10,
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
