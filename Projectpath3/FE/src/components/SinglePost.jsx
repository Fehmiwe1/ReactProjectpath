import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../assets/styles/SinglePost.css";

function SinglePost() {
  const [post, setPost] = useState({});

  const { id } = useParams(); // get ID from URL

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`/post/${id}`)
      .then((res) => {
        setPost(res.data[0]);
        console.log(res.data); // Data from API
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="post main">
      {post ? (
        <div className="container">
          <div className="single-post">
            <h1 className="post-title">{post.ID}</h1>
            <p className="post-p">{post.Incident_Date}</p>
            <p className="post-p">Employee ID: {post.ID_Employee}</p>
            <div className="single-post-container">
              <h2 className="post-title">{post.Incident_Name}</h2>
              <p className="post-content">{post.Description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <p>No data</p>
        </div>
      )}
    </section>
  );
}

export default SinglePost;
