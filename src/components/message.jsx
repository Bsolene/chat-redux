import React from 'react';

const Message = (props) => {

  return (
    <div className="message">
      <div className="message_info">
        <h3>{props.author}</h3>
        <p>{props.time}</p>
      </div>
      <p>{props.content}</p>
    </div>
  )

}

export default Message;
