/* eslint-disable react/prop-types */

function FeedbackUserCard({ name, avatar, comment, rate }) {
  return (
    <>
      <div className="feedback-user-image">
        <img src={avatar} alt="User Avatar" />
      </div>

      <h2 className="feedback-user-name">{name}</h2>
      <span className="feedback-user-comment">{comment}</span>
      <span className="feedback-user-rate">
        {rate} <i className="feedback-user-rate-icon bi bi-star"></i>
      </span>
    </>
  );
}

export default FeedbackUserCard;
