import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviePage";







export default function App() {
  return (
    <>
      <Suspense fallback={<h2>Wait</h2>}>
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