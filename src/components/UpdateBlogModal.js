import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";
import { blogsCollection } from "../firebase/Firebase";
import { setDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 8,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

export const UpdateBlogModal = (props) => {
  const { open, handleClose, blog } = props;
  const [blogData, setBlogData] = useState({ ...blog });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.content ||
      !blogData.tag ||
      !blogData.createdAt ||
      !blogData.updatedAt
    ) {
      alert("please fill out all fields");
      return;
    }

    const blogRef = doc(blogsCollection, blogData.blogId);

    await deleteDoc(blogRef);

    await setDoc(blogRef, {
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
      tag: blogData.tag,
      createdAt: blogData.createdAt,
      updatedAt: serverTimestamp(),
    });

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3>Update Blog</h3>

        <TextField
          type="text"
          name="title"
          placeholder="Title..."
          value={blogData.title}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="description"
          placeholder="Description..."
          value={blogData.description}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="content"
          placeholder="Content..."
          value={blogData.content}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Update Blog</Button>
      </Box>
    </Modal>
  );
};
