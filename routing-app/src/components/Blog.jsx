import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import Post from "./Post";

function Blogs(){
    const posts =[
        {id:1,post:"React-Intro"},
        {id:2,post:"React-Project"},
        {id:3,post:"React-Routers"},
        {id:4,post:"Rendering-React"}
    ]
    return (
        <div className="post-container">
            <ul>
            {posts.map((post) => <Link to={`/post/${post.id}`} ><li>{post.post}</li></Link>)
            }
            </ul>
        </div>
    )
}
export default Blogs;