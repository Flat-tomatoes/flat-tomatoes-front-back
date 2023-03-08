import { useState, useEffect } from "react";
import Comment from "./Comment"

 function AddComment({comment}) {

  // const [questions, setQuestions] = useState({});
const [comments, setComments] = useState([]);
const [commentForm, setCommentForm] = useState({
  //user_id: 1,
  //movie_id: 1
})

useEffect(() => {
  fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(commentData => {
      setComments(commentData)
  })
  }, [])

const commentComponents = comments.map((comment) => {

   return (<Comment key={comment.id} comment={comment}/>)
  })

function handleSubmit (e) {
  e.preventDefault();
  console.log(commentForm)
  fetch("/comments" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentForm),
  })
  .then(r=> r.json())
  .then((newComment) => setComments([...comments, newComment]))
}

function updateComment(event) {
      setCommentForm({...commentForm, [event.target.name]: event.target.value});
}

// function handleEditComment(id, correctIndex) {
//   fetch(`/comments ${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ correctIndex }),
//   })
//     .then((r) => r.json())
//     .then((updatedQuestion) => {
//       const updatedQuestions = questions.map((q) => {
//         if (q.id === updatedQuestion.id) return updatedQuestion;
//         return q;
//       });
//       setQuestions(updatedQuestions);
//     });
// }


function handleDeleteComment(id) {
fetch(`/comments ${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

})
.catch(error => {
  console.error('There was a problem with the delete request:', error);
});
}
    return (
        <div className="new-comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="text" 
        placeholder="Enter comment here"
        onChange={updateComment}
         />
        <button type="submit">Submit Comment</button>
        <button type="submit">Edit Comment</button>
        <button type="submit">Delete Button</button>
        </form>
        {commentComponents}
        </div>
    )
}
export default AddComment;