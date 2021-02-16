import React, { useState, useEffect } from "react";
import axios from 'axios'
import './../App.css'
function Home() {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const newPosts = res.data.data.children
                    .map(obj => obj.data);
                console.log(newPosts)
                setPosts(newPosts);
            });
    }, []);

    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <div className="container main-card" key={post.id}>
                            <div  className="card">
                                <a href={post.url} target="blank">
                                <h3>{post.title}</h3></a><br></br>  
                                <p>{post.author}</p><br/>
                                <p>{post.selftext}</p><br/>
                                <div className='score'>
                                    <i>Score {post.score}</i>
                                    <i>Submmiting Users {[post.ups]}</i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home;