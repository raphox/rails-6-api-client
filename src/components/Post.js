import React from "react";

import Comment from "./Comment";

function Post({ id, title, body, comments }) {
  return (
    <div className="card mb-2">
      <div className="card-header">{id}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>

        <h6>Comments</h6>
        <ul>
          {comments.map((item) => (
            <Comment body={item.body} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;
