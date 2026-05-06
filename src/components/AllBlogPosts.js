import React, { useState } from "react";
import { BlogCard } from "./BlogCard";
import { useBlogContext } from "../context/BlogContext";

export const AllBlogPosts = () => {
  const { blogs, blogsLoading } = useBlogContext();
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredBlogs =
    selectedTag === "all"
      ? blogs
      : blogs.filter((blog) => blog.tag === selectedTag);

  const tags = ["all", "discovery", "technology", "art"];

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
      <h2 style={{ margin: 0 }}>All Blog Posts</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {tags.map((tag) => (
          <div
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{
              color: selectedTag === tag ? "rgb(212, 163, 115)" : "rgb(0,0,0)",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 20,
          }}
        >
          {blogsLoading ? (
            <div>Loading...</div>
          ) : filteredBlogs.length === 0 ? (
            <div>No blogs found</div>
          ) : (
            filteredBlogs.map((blog) => (
              <div key={blog.blogId}>
                <BlogCard blog={blog} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
