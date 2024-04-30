import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./Post.css";

const DeletePost: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const postId = parseInt(id);
  const [post, setPost] = useState<{ title: string; body: string }>({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchData();
  }, [postId]);
  const nagivate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postData = response.data;
      setPost(postData);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      alert("Post deleted successfully!");
      nagivate("/viewall");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="edit-container">
      <h2>Delete Post</h2>
      <div className="input-edit-container">
        <label>Title:</label>
        <input type="text" value={post.title} readOnly />
      </div>
      <div className="input-edit-container">
        <label>Body:</label>
        <textarea value={post.body} readOnly className="textarea" />
      </div>
      <button onClick={handleDelete} className="button button-delete">
        Delete
      </button>
    </div>
  );
};

export default DeletePost;
