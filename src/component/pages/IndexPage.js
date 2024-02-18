import React, { useEffect, useState } from 'react'
import Post from '../Post'

const IndexPage = () => {
  const [posts,setPosts]=useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:4000/post').then(response => {
  //     response.json().then(posts => {
  //       setPosts(posts);
  //     });
  //   });
  // }, []);

  return (
    <div>
       <Post/>
       <Post/>
       <Post/>
    </div>
  )
}

export default IndexPage
