import { TrendingCard } from "../components/TrendingCard";
import { useBlogContext } from "../context/BlogContext";

export const TrendingSection = () => {
  const { blogs, blogsLoading } = useBlogContext();

  if (blogsLoading) return <div>Loading...</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        margin: "50px 0",
        padding: "0 280px",
      }}
    >
      <h2 style={{ margin: 0 }}>Trending</h2>
      <div style={{ display: "flex" }}>
        {blogs.slice(0, 4).map((blog) => (
          <TrendingCard key={blog.blogId} blog={blog} />
        ))}
      </div>
    </div>
  );
};
