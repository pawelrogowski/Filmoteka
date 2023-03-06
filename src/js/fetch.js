import { API_KEY, API_URL, setPage, setTotalPages, setLastQuery, TOTAL_PAGES, PAGE } from './globals';

import { showSpinner, hideSpinner, showSpinnerModal } from './spinner';
import { createButtons } from './pagination';
import { createGallery } from './create-gallery';
import { Notify } from 'notiflix';

const paginationBox = document.querySelector('.pagination');

// Call API by movie ID and get a response with details
// Return an object with details - genres are already resolved
// ID parameter must be a string

export async function fetchMovieById(id) {
  const apiTarget = '/movie/';
  showSpinnerModal();
  try {
    const response = await fetch(`${API_URL}${apiTarget}${id}?api_key=${API_KEY}`);
    const data = await response.json();

    const creditsResponse = await fetch(`${API_URL}${apiTarget}${id}/credits?api_key=${API_KEY}`);
    const creditsData = await creditsResponse.json();
    const genres = data.genres;

    const movieGenres = genres && Array.isArray(genres) ? genres.map(genre => genre.name) : [];
    return { ...data, genre_ids: movieGenres };
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTrending(page) {
  showSpinner();
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();

    const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const genresData = await genresResponse.json();
    const genres = genresData.genres;

    const results = data.results.map(movie => {
      const movieGenres = movie.genre_ids.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre.name;
      });
      return { ...movie, genre_ids: movieGenres };
    });
    setPage(page);
    const totalResults = data.total_results;
    const totalPages = Math.ceil(totalResults / 20); // 20 results per page
    setTotalPages(totalPages);
    createButtons(TOTAL_PAGES, PAGE);
    hideSpinner();
    return results;
  } catch (error) {
    hideSpinner();
    console.error(error);
  }
}

// Fetch movie data based on query and page number
// Return an array of objects with movie data based on a query
export async function fetchQuery(query, page) {
  try {
    showSpinner();
    // Fetch data from api
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    const data = await response.json();

    // Fetch genres for the movie
    const genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const genresData = await genresResponse.json();
    const genres = genresData.genres;

    // Map the results array with genre names
    const results = data.results.map(movie => {
      const movieGenres = movie.genre_ids.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre.name;
      });
      return { ...movie, genre_ids: movieGenres };
    });

    // Set totalResults variable
    const totalResults = data.total_results;
    if (totalResults < 1) {
      Notify.failure(`Sorry, there are no movies matching your search`, {
        position: 'center-top',
      });
      fetchTrending(1).then(data => {
        createGallery(data);
      });
    }

    // Calculate totalPages for pagination
    const totalPages = Math.ceil(totalResults / 20); // 20 results per page

    // Set page and totalPages variables
    setPage(page);
    setTotalPages(totalPages);
    setLastQuery(query);
    createButtons(TOTAL_PAGES, PAGE);

    // Hide loading spinner
    hideSpinner();

    // Return the final result
    return results;
  } catch (error) {
    hideSpinner();
    console.error(error);
  }
}
