import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as apiService from '../../services/apiService';
import s from './MovieDetails.module.css'


export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const [status, setStatus] = useState('pending')
  const { type, movieId } = useParams();
    useEffect(() => {
        
        apiService.getReviews(type, movieId)
            .then(r => setReviews(r.results)).finally(setStatus('success'));
        
    }, [movieId, type])
    
    
        
    if (status === 'pending') {
        return (<p>Loading...</p>)
    }
    if (status === 'success') {
        return (<>
            <p>
            {reviews.length === 0 && "No review added yet."}
            
        </p>
        <ul >
          {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
              <h2 className={s.reviewAuthor}>Author: {review.author}</h2>
            </li>
          ))}
            </ul>
            </>
    )
}
    
};