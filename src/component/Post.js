import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
        <img src="./image/1.jpg" alt="" />
        </div>
        <div className="texts">
        <h2>
            Lorem ipsum dolor sit amet 
          </h2>
          <p className="info">
            <a className="author" href="">Harshit Rajput</a>
            <time>2024-01-02 16:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dignissimos, quasi minus ut reprehenderit ipsa voluptatem! Corrupti
            accusamus, ea beatae magni a quaerat obcaecati minima dolor
            blanditiis repellendus nostrum quos itaque dolore atque soluta error
            laborum veritatis quam sit impedit quidem at dicta 
          </p>
        </div>
      </div>
  )
}

export default Post
