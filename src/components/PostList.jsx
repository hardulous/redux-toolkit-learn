import React, { useEffect } from "react";
import { fetchPosts } from "../services/slices/PostSlice";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const { loading, posts, error } = useSelector((state) => state.postList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>PostList</h2>
      {loading ? (
        <h1>LOADING...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        posts.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })
      )}
    </div>
  );
};

export default PostList;
