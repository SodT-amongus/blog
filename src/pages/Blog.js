import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { DeleteBlogModal } from "../components/DeleteBlogModal";
import { Header } from "../components/Header";
import { UpdateBlogModal } from "../components/UpdateBlogModal";
import { useBlogContext } from "../context/BlogContext";
import { useUserContext } from "../context/UserContext";

export const BlogPage = () => {
  const { id } = useParams();
  const { blogs, blogsLoading } = useBlogContext();

  const [openUpdate, setOpenUpdate] = useState(false);

  const { currentUser } = useUserContext();
  const singleBlog = blogs.find((blog) => blog.blogId === id);
  const isOwner = currentUser && singleBlog.userId === currentUser.uid;

  const handleOpenUdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  if (blogsLoading) return <div>Loading...</div>;
  if (!blogsLoading && !singleBlog) return null;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: "800px",
          minWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginBottom: "100px",
        }}
      >
        <h1
          style={{
            display: "flex",
            gap: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          {singleBlog.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <p>
            {singleBlog.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <img
          src={
            singleBlog.imageURL || "https://picsum.photos/seed/picsum/536/354"
          }
          width={800}
          alt={singleBlog.title}
        />

        <p style={{ marginTop: 40 }}>{singleBlog.content}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          {isOwner && (
            <div
              style={{
                display: "flex",
                marginTop: 40,
                gap: 20,
              }}
            >
              <Button style={{ width: 120 }} onClick={handleOpenUdate}>
                Update
              </Button>
              <Button style={{ width: 120 }} onClick={handleOpenDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>

        <UpdateBlogModal
          open={openUpdate}
          handleClose={handleCloseUpdate}
          blog={singleBlog}
        />

        <DeleteBlogModal
          open={openDelete}
          handleClose={handleCloseDelete}
          blog={singleBlog}
        />
      </div>
    </div>
  );
};
