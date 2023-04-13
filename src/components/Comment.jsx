import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function Comments({ comments }) {
  // const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const { commentId } = useParams();
  const { itemId } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/api/item/${itemId}/comments`, { message })
      .then((res) => {
        setMessage("");
        alert("Comment been added!");
        navigate(0);
      })
      .catch((err) => console.log("Error while adding the new comment: ", err));
  };

  const deleteComment = () => {
    axios
      .delete(`${API_URL}/api/comments/${commentId}`)
      .then(() => {
        alert("Comment has been deleted!");
        navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="add-review">
        <h5>Add a Review</h5>
        <form onSubmit={handleSubmit} className="reviewform">
          <div className="comment-text-plus-button">
            <textarea
              cols="30"
              rows="2"
              type="string"
              name="comment"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>

            <button className="button-submit-review" type="submit">
              Submit review
            </button>
          </div>
        </form>
      </div>

      <h5>Reviews from other users:</h5>
      <div className="review-group-from-other-users">
        {comments &&
          comments.map((comment) => {
            return (
              <div className="comment-message">
                <div className="comment-message-and-stars">
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/6/Golden-5-Star-Rating-PNG.png"
                    alt="stars"
                    className="stars"
                  ></img>
                  <p className="comment-area"> {comment.message}</p>
                </div>

                <button className="bin-button" onClick={deleteComment}>
                  <img
                    src="https://icons-for-free.com/download-icon-delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588_512.png"
                    alt="bin"
                    className="bin-button-img"
                  />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Comments;
