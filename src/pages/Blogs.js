import { useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Button } from "../components/Button";
import { CreateBlogModal } from "../components/CreateBlogModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NotLoggedIn } from "../components/NotLogged";
import { useBlogContext } from "../context/BlogContext";
import { useUserContext } from "../context/UserContext";

export const Blogs = () => {
  const [openBlog, setOpenBlog] = useState(false);
  const handleCloseBlog = () => setOpenBlog(false);
  const { currentUser } = useUserContext();

  const [openNotLoggedIn, setOpenNotLoggedIn] = useState(false);

  const { blogs, blogsLoading } = useBlogContext();

  const handleCreateBlog = () => {
    if (!currentUser) {
      setOpenNotLoggedIn(true);
    } else {
      setOpenBlog(true);
    }
  };

  if (blogsLoading) return <p>Loading...</p>;

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <div>
          <Button onClick={handleCreateBlog}>Create Blog</Button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 20,
          }}
        >
          {blogs.map((blog) => (
            <div key={blog.blogId}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <CreateBlogModal open={openBlog} handleClose={handleCloseBlog} />
        <NotLoggedIn
          open={openNotLoggedIn}
          handleClose={() => setOpenNotLoggedIn(false)}
        />
      </div>
      <Footer />
    </>
  );
};
