import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Post.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MyComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };
  const handleDelete = async (postId: number) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      alert("Post deleted successfully!");
      setPosts((data) => data.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>UserID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Link to={`/edit/${post.id}`}>
                <button>Edit</button>
              </Link>{" "}
              <Link to={`/view/${post.id}`}>
                <button>View</button>
              </Link>{" "}
              <button onClick={() => handleDelete(post.id)}> Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyComponent;
