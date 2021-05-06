import "./Messages.scss";

import email from "../../../../assets/dashboard/email.png";

const Messages = () => {
  return (
    <div className="message">
      <h1>
        <span>raihanislamshagor2@gmail.com</span> 0 Conversations
      </h1>

      <div className="inbox">
        <img height="100px" width="100px" src={email} alt="" />
        <h2>Your inbox is empty!</h2>
        <p>
          <a href="!#">Expecting to see something here?</a>
        </p>
      </div>
    </div>
  );
};

export default Messages;
