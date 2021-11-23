import { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

import Gallery from '../components/Gallery/Gallery';
import Searchbar from '../components/Search/Search';
import * as apiService from '../services/apiService';



export default function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('intial')
  const [urlQuery] = useState(()=>new URLSearchParams(location.search).get("query"));
  
const allQUery = query || urlQuery

 const onSubmit = (query) => {
   navigate({ ...location, search: `query=${query}` });
    setQuery(query);
}

  useEffect(() => {
    if (!allQUery) { return };
    setStatus('pending')
    setPage(1);
    apiService.getInfoByQuerry(allQUery)
      .then(r => setResults(r.results.filter((el) => el.media_type === "movie" || el.media_type === "tv")))
   .finally(setStatus("success"))
   
  }, [allQUery])
  
  useEffect(() => {
    if (page !== 1 ) {
      apiService.getInfoByQuerry(allQUery, page)
        .then(r => {
          setResults((prev) => [...prev, ...r.results.filter((el) => el.media_type === "movie" || el.media_type === "tv")])
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })}
        )
   .finally(setStatus("success"))
    }
   
  }, [page, allQUery])

  return (
    <>
    {status === 'pending' && <h2> FUCK</h2>}
      <Searchbar onSubmit={onSubmit}/>
     
        {results && <Gallery items={results} />}
    
    </>
  );
}