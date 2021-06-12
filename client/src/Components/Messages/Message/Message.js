import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  console.log("object",user);
  let isSentByCurrentUser = false;
  let admin=false;
  if(user==="admin")
  {
admin=true
  }
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    console.log("useradmin",user);
    isSentByCurrentUser = true;
   
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className={"messageBox backgroundLight "+ (admin ? 'adminBackground':'otherBg')}>
              <p className={"messageText colorDark "+(admin ? 'adminMessage':'otherMessgae')}>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className={`sentText pl-10 ` + (admin ? 'admin':'otherUser')}>{user}</p>
          </div>
        )
  );
}

export default Message;