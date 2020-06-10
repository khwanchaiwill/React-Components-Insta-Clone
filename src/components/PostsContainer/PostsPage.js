//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'
console.log(dummyData)

const PostsPage = (props) => {
  // set up state for your data
  // const [page, setPost] = useState(dummyData)
  const {search} = props
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
     {
      search.map((postData, index,date) =>{
         return <Post key={index} post={postData} date={date}/>
         
       })
     }
    
    </div>
  );
};

export default PostsPage;
