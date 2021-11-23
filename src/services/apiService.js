import axios from "axios";

const API_KEY = '2a73f06abe2eebf59e2f2b6c2b7b0bd5';

export function getCreditsById(type, id) {
    return axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`,
    )
    .then(r => r.data);
}

export function getTrends() {
    return axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    )
    .then(r => r.data);
}

export function getDetailsById(id) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(r => r.data)
}

export function getInfoByQuerry(query, page = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=${API_KEY}`,
    )
    .then(r => r.data);
}

export function getReviews(type,id) {
    return axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(r => r.data)
};

export function getInfoById(type, id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`,
    )
    .then(r => r.data);
};