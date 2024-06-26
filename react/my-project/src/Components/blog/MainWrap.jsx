import React from "react";
import Article from "./Article";

function MainWrap({ posts, recentPosts }) {
  return (
    <div id="wrap">
      <section>
        {
          posts.map((post, idx) => {
            return (
              <Article key={idx}
                title={post.title}
                date={post.date}
                imgUrl={post.imgUrl}
                content={post.content}
              />
            )
          })
        }
      </section>
      Aside
    </div>
  )
}

export default MainWrap;