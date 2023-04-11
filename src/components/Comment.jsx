import axios from "axios";
import { useEffect, useState } from "react";

function Comments(){
    const [comments, setComments] = useState([])

    useEffect(()=> {
        axios.get('')
    })


    return(
        <>
        <div>

            <h3>Add a review:</h3>

            <textarea name="message" cols="30" rows="2"></textarea>
            <br/>
            <button className="btn" >Comment</button>
  
        </div>
        <h3>Reviews:</h3>
        {
            comments.map((responce) =>{
                return(
                <div>
                    

                </div>
                )


            })
        }
        </>
    )
}

export default Comments;