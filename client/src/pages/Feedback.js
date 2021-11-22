import React from "react";

import "./feedback.css";

export default function Feedback() {
  return (
    <div className="userhello">
      <div className="userTitlec">
        <h1 className="userTitle">Feedback</h1>
      </div>
      <div className="userContainer">
        <div className="userShowfeedback">
          <div className="userShowBottomfeedback">
            <span className="userUpdateTitlefeedbackReplies">Replies</span>

            <div className="userShowInfofeedback">
              <span className="userShowInfoTitlefeedback">
                <input
                  type="textarea"
                  placeholder=" "
                  readOnly
                  className="userUpdateInputfeedbackReplies"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdatefeedback">
          <span className="userUpdateTitlefeedback">
            Type your Message here..
          </span>
          <form className="userUpdateFormfeedback">
            <div className="userUpdateLeft">
              <div className="userUpdateItemfeedback">
                <textarea
                  className="feebackMessageTextArea"
                  name="comment"
                ></textarea>
              </div>
            </div>
            <div className="userUpdateRightfeedback">
              <button className="userAdditionButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
