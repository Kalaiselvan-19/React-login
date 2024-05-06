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
      const response = await axios.get(`http://localhost:4000/posts/${postId}`);
      const postData = response.data;
      setEditPost(postData);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/posts/${postId}`, editPost);
      alert("Post updated successfully!");
      navigate("/viewall");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPost({ ...editPost, title: e.target.value });
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditPost({ ...editPost, body: e.target.value });
  };

  return (
    <div className="edit-container">
      <h2>Edit Post</h2>
      <div className="input-edit-container">
        <label>Title:</label>
        <input
          type="text"
          value={editPost.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input-edit-container">
        <label>Body:</label>
        <textarea
          value={editPost.body}
          onChange={handleBodyChange}
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
