import React, {useState} from "react";
import Comment from "./Comment";

function CommentSec({comments, isHidden}) {
  const [searchText, changeSearch] = useState('');
  const [theComments, changeList] = useState(comments);
  const [isSorted, sortList] = useState(false);

  function handleSort() {
    sortList(!isSorted);
  }

  const sortedComments = isSorted ? 
    [...theComments].sort((a, b) => a.user.localeCompare(b.user)) : [...theComments];
  const searchedComments = sortedComments.filter((comment) => comment.user.includes(searchText));
  const commentList = searchedComments.map((comment) => (
    <Comment key={comment.id} onTaskDelete={handleTaskDelete} theComment={comment} />
  ));

  function handleTaskDelete(e) {
    const newList = theComments.filter((comment) => {
      return comment.id === parseInt(e.target.name) ? false : true;
    });
    changeList(newList);
  }

  return (
    <div style={{display: isHidden ? 'none' : 'block'}} >
      <h2>{`${commentList.length} Comments`}</h2>
      <label>
        {'Search for a User Comment '}
        <input onChange={(e) => changeSearch(e.target.value)} type="text" name="userSearch" placeholder="user..." />
      </label>
      <label>
        {' Sort Comments by UserName Alphabetically '}
        <button onClick={handleSort} >{isSorted ? 'UNSORT' : 'SORT'}</button>
      </label>
      {commentList}
    </div>
  )
}

export default CommentSec;