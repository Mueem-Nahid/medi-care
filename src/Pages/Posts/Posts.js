import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://mueem-nahid.github.io/Data/posts.json')
        .then(res=>res.json())
        .then(data=>setPosts(data));
    },[]);
    return (
        <div className="container">
            <h2 className="text-center fw-bold pt-5 pb-3">Posts</h2>
            <div className="row">
                {
                    posts.map(post => <Post key={post.id}
                    post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;