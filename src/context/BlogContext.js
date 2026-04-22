import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { blogsCollection } from "../firebase/Firebase";

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getLiveUpdates = onSnapshot(blogsCollection, (collectionSnapshot) => {
      const blogData = collectionSnapshot.docs.map((blogDoc) => ({
        blogId: blogDoc.id,
        ...blogDoc.data(),
      }));

      setBlogs(blogData);
    });

    return () => getLiveUpdates();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
