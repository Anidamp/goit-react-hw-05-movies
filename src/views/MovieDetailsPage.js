import { Suspense, useEffect, useState } from "react"
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import * as apiService from '../services/apiService';
import Actors from '../components/MovieDetails/Actors';
import Reviews from "../components/MovieDetails/Reviews";
import s from '../components/Navigation/Navigation.module.css'
import Loader from "../components/Loader/Loader";




export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  const location = useLocation();
    const navigate = useNavigate();
  const goBack = () => {
    if (location.pathname === `/movies/${type}/${movieId}`) {
      navigate(-1);
    }
    if (location.pathname === `/movies/${type}/${movieId}/actors`) {
      navigate(-2);
    }
    if (location.pathname === `/movies/${type}/${movieId}/reviews`) {
      navigate(-2);
    }
  };


    useEffect(() => {
        apiService.getInfoById(type, movieId).then(r=> setMovie(r), console.log(type, movieId));
    }, [type, movieId]);

    return (
        <>
        <div className="container">

      <button className = {s.btn_back} type="button" onClick={goBack}>Back to results </button>
      {movie && <MovieDetails movie={movie} type={type} />}
      <NavLink 
        to='actors' className = {s.botLink}  >Cast</NavLink>
          <NavLink 
          to= 'reviews' className = {s.botLink}
           >Reviews</NavLink>
         <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/actors' element={<Actors/>} />
            <Route path='/reviews' element ={<Reviews/>} />
          </Routes>
          </Suspense>
    </div>
       </>
    )
}