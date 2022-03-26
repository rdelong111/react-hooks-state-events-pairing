import React, {useState} from "react";

function LikeDis({upvotes, downvotes}) {
  const [UDs, updateVote] = useState({
    upvote: upvotes,
    downvote: downvotes
  });

  function handleVote(e) {
    updateVote({...UDs, [e.target.name]: UDs[e.target.name] + 1})
  }

  return (
    <div>
      <button
        name="upvote"
        onClick={handleVote}
      >
        {`${UDs.upvote} 👍`}
      </button >
      <button
        name="downvote"
        onClick={handleVote}
      >
        {`${UDs.downvote} 👎`}
      </button>
    </div>
  )
}

export default LikeDis;