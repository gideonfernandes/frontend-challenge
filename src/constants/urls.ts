const POPULARS = 'movie/popular'
const GENRES = 'genre/movie/list'
const TOP_RATED = 'movie/top_rated'
const AUTH = 'api/auth'
const USERS = 'api/users'

function IMAGE(path: string) {
  return `https://image.tmdb.org/t/p/w500/${path}`
}

function CREDITS(id: string) {
  return `movie/${id}/credits`
}

function DETAIL(id: string) {
  return `movie/${id}`
}

const URLS = {
  IMAGE,
  DETAIL,
  GENRES,
  CREDITS,
  POPULARS,
  TOP_RATED,
  AUTH,
  USERS,
}

export default URLS
