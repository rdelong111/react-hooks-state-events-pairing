import video from "../data/video.js";
import React, {useState} from "react";
import LikeDis from "./LikeDis";
import CommentSec from "./CommentSec";

function App() {
  const [hidden, hiddenOrNot] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
      <LikeDis upvotes={video.upvotes} downvotes={video.downvotes} />
      <br />
      <button onClick={() => hiddenOrNot(!hidden)} >
        {hidden ? 'Show Comments' : 'Hide Comments'}
      </button>
      <hr />
      <CommentSec
        comments={video.comments}
        isHidden={hidden}
      />
    </div>
  );
}

export default App;
