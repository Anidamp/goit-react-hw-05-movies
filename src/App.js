import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";


const HomePage = lazy(() =>
  import('./views/HomePage' ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviePage'),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' ),
);





export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path = '/' element = {<Navigation/>}>
            <Route index element={<HomePage />} />
            <Route path ='/movies/:type/:movieId/*' element = {<MovieDetailsPage />} />
            <Route path='/movies' element={<MoviesPage />} />
          </Route>
        </Routes>
    </Suspense>
    </>
  )
}