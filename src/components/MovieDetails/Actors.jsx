import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Actors.module.css'
import * as apiService from '../../services/apiService';
import placeholder from '../../images/placeholder.png'


export default function Actors() {
    const [actors, setActors] = useState([])
    const [status, setStatus] = useState('pending')
    const { type, movieId } = useParams();
    
    useEffect(() => {
        
        apiService.getCreditsById(type, movieId)
            .then(r => setActors(r.cast)).finally(setStatus('success'));
        
    }, [movieId, type])
    
    if (status === 'pending') {
        return(<p>Loading...</p>)
    }
    
    if (status === 'success') {
        if (actors.length < 1) {
            return (<p>No cast information found</p>)
        }
    
        return (
            <ul className={s.actors}>
                {actors.map(el => {
                    return (
                        <li key={el.id}>
                            <img className = {s.actorsImg} src={
                                el.profile_path ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`: placeholder} alt={el.name} />
                            <span className={s.actorsName}>{el.name} </span> as 
                            <p> {el.character}</p>
                            
                        </li>)
                })
                }
            </ul>
        )
    }
};