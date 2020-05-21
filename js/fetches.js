const API_KEY = '0519155fd53be4ff5ad8e64316027387';

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  )
    .then(data => data.json())
    .then(data => data.results);
};

export const getFilmByName = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(data => data.json())
    .then(data => data.results);
};
