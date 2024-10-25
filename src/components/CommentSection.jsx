import React, { useState, useEffect } from 'react';
import '../styles/Comments.css';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`https://recept5-kivel.reky.se/recipes/${recipeId}/comments`);
      const data = await response.json();
      setComments(data);
      setLoading(false);
    };

    fetchComments();
  }, [recipeId]);

  function getFormattedDate() {
    const date = new Date();
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}$`;
  }

  const handleAddComment = async () => {
    if (!name.trim() || !newComment.trim()) {
      setErrorMessage('Den här fälten kan inte vara tom.')
      return;
    }
       
    const letterOnlyRegex = /^[A-Za-z]+$/;

    if (!name) {
      setErrorMessage('Den här fälten kan inte vara tom.');
      return;
    } else if (!letterOnlyRegex.test(name)) {
      setErrorMessage('Ange endast bokstäver.');
      return;
    } 
    
    let date = getFormattedDate();
    
    const newCommentData = {
      name: date + name,
      comment: newComment,
    };

    setIsSubmitting(true); 

    await fetch(`https://recept5-kivel.reky.se/recipes/${recipeId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCommentData),
    });

    setComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment(''); 
    setName(''); 
    setIsSubmitting(false); 
  };

  return (
    <div className="comments-section">
      <h4>Kommentar</h4>

      <div className="comment-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ditt namn"
          className="input-field"
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Lägg till kommentar..."
          className="textarea-field"
        ></textarea>
        <button onClick={handleAddComment} disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {loading ? (
        <p>Laddar kommentarer...</p>
      ) : comments.length > 0 ? (
        comments.map((comment, index) => {
          const [date, name] = comment.name.split("$");
          return (
            <div key={index} className="comment-card">
              <p><strong>{name}:</strong> {date}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })
        
      ) : (
        <p>Inga kommentarer än.</p>
      )}
    </div>
  );
};

export default Comments;