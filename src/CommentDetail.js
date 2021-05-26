import React from 'react';


function CommentDetail(props) {
     
    return (
        <div classsName="commment">
          <a href="/" className="author"> {props.author} </a>
          <img src={props.image} alt="avtar"/>
          <div className="metadata">
              <span className="date">{props.time}</span>
          </div>
          <div className="text">Nice blog post !</div>
         </div>
    )
}

export default CommentDetail
