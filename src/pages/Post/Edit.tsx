// EditPost.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Post.css";
interface EditPost {
  title: string;
  body: string;
}
const EditPost: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const postId = parseInt(id);

  const [editPost, setEditPost] = useState<EditPost>({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchData();
  }, [postId]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postData = response.data;
      setEditPost(postData);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        editPost,
      });
      alert("Post updated successfully!");
      navigate("/viewall");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="edit-container">
      <h2>Edit Post</h2>
      <div className="input-edit-container">
        <label>Title:</label>
        <input
          type="text"
          value={editPost.title}
          onChange={(e) => EditPost(e.target.value)}
        />
      </div>
      <div className="input-edit-container">
        <label>Body:</label>
        <textarea
          value={editPost.body}
          onChange={(e) => EditPost(e.target.value)}
          className="textarea"
        />
      </div>
      <button onClick={handleUpdate} className="button button-edit">
        Update
      </button>
    </div>
  );
};

export default EditPost;
