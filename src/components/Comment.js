import React, {useState} from "react";

function Comment({onTaskDelete, theComment}) {
  const [UDs, updateVote] = useState({
    upvote: 0,
    downvote: 0
  });

  function handleVote(e) {
    updateVote({...UDs, [e.target.name]: UDs[e.target.name] + 1});
  }

  return (
    <div>
      <h3>{theComment.user}</h3>
        <p>
          {`${theComment.comment} `}
          <button onClick={handleVote} name="upvote" >{`${UDs.upvote} 👍`}</button>
          <button onClick={handleVote} name="downvote" >{`${UDs.downvote} 👎`}</button>
          <button name={theComment.id} onClick={onTaskDelete} >X</button>
        </p>
    </div>
  )
}

export default Comment;