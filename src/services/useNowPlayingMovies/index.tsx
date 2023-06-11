import { useQuery } from '@tanstack/react-query';

const BASE_URL = "teste"
const API_KEY = "este"

export const moviesApi = {
  nowPlaying: () =>
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`).then(res =>
      res.json()
    )
};

export const useNowPlayingMovies = () => {
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    ['movies', 'nowPlaying'],
    moviesApi.nowPlaying
  );

  return {
    nowPlayingLoading,
    nowPlayingData
  };
};