import React, { useState, useEffect } from 'react';
import '../styles/Comments.css';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`https://recept5-kivel.reky.se/recipes/${recipeId}/comments`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [recipeId]);

  const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleAddComment = async () => {
    if (!name.trim() || !newComment.trim()) {
      setErrorMessage('Fälten kan inte vara tomma.');
      return;
    }

    const letterOnlyRegex = /^[A-Za-zåäöÅÄÖ]+$/;
    if (!letterOnlyRegex.test(name)) {
      setErrorMessage('Ange endast bokstäver.');
      return;
    }

    const date = getFormattedDate();
    const newCommentData = {
      name: date + "$" + name,
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
      <h4>Kommentarer</h4>
      <div className="comment-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ditt namn"
          className="input-field"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Lägg till kommentar..."
          className="textarea-field"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleAddComment} disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Lägger till...' : 'Skicka'}
        </button>
      </div>
      {comments.length > 0 ? (
        comments.map((comment, index) => {
          const [date, name] = comment.name.split("$");
          return (
            <div key={index} className="comment-card">
              <div className="comment-card-title">
                <p><strong>{name}</strong></p>
                <p className="comment-date">{date}</p>
              </div>
              <div className="comment-card-comment">
                <p>{comment.comment}</p>
              </div>
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
