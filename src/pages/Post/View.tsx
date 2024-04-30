import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Post.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ViewPost: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const postId = parseInt(id);
  const [viewPost, setViewPost] = useState<Post>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchData();
  }, [postId]);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postData = response.data;
      setViewPost(postData); // Set the viewPost state
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };
  const handleBack = () => {
    navigate("/viewall");
  };
  return (
    <div className="edit-container">
      <h2>Post Detail</h2>
      <div className="input-edit-container">
        <label>UserID:</label>
        <input type="text" value={viewPost.userId} readOnly />{" "}
      </div>
      <div className="input-edit-container">
        <label>Title:</label>
        <input type="text" value={viewPost.title} readOnly />{" "}
      </div>
      <div className="input-edit-container">
        <label>Body:</label>
        <textarea value={viewPost.body} className="textarea" readOnly />{" "}
      </div>
      <button onClick={handleBack} className="button button-edit">
        Back
      </button>
    </div>
  );
};

export default ViewPost;
