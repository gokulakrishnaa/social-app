import "./Message.css";
import { format } from "timeago.js";

export function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://i.pinimg.com/474x/bf/27/21/bf27218810c8066367132ccf2c1fd316.jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
