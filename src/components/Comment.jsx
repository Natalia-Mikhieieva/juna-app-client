import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function Comments(){
    const [comments, setComments] = useState([])
    const [message, setMessage] = useState('')
    const { commentId } = useParams()

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`${API_URL}/api/comments/${commentId}`)
        .then((responce)=>{
            setComments(responce.data.items.comments)
            console.log("responce data Comment:",responce.data.items.comments)

        })
        .catch((err) => console.log(err));
    })
    const handleSubmit = (e) => {
        e.preventDefault();
    
        service
          .createComment({
            message
          })
          .then((res) => {
            setMessage()
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


    return(
        <>
        <br />
        <div className="comment">
        <form onSubmit={handleSubmit}>
            <h3>Add a review:</h3>

            <textarea name="message" cols="30" rows="2"></textarea>
            <br/>
            <button className="btn" type="submit">Comment</button>
        </form>
        </div>
        
        <br />
        <h3>Reviews:</h3>
        {
            comments.map((comment) =>{
                return(
                <div>
                    <p>{comment.message}</p>
                    <img src="https://icons-for-free.com/download-icon-delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588_512.png" alt="bin" onClick={deleteComment}/>

                </div>
                )


            })
        }
        </>
    )
}

export default Comments;