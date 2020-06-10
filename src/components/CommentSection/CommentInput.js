// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  console.log(props) 
  const {updater} = props
  const changeComment = event =>{
    updater(event.target.value)
  }
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeComment.changeComment}
      />
    </form>
  );
};

export default CommentInput;
