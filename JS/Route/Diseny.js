import { API_Key, API_URL, IMAGE_BASE_URL } from "../Modules/APIVar.js";
import { getMain } from "../Modules/MainMovie.js";
import { movieSwiper } from "../Modules/MovieSwiper.js";
import { modal, movieDetail } from "../Modules/Modal.js";
const movies = [];
const KRmovies = [];
const drama = [];
const Kdrama = [];
const image = [];
let index = Math.floor(Math.random() * 20);
const getMovies = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => movies.push(movie));
  getMain(movies[index].id, movies[index].title, movies[index].overview);
  console.log(movies);
  const swiper_wrapper = document.querySelector(".movie_swiper_wrapper");
  movieSwiper(swiper_wrapper, movies);
  modal();
};

const getKRmovies = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_origin_country=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => KRmovies.push(movie));
  console.log(KRmovies);
  const swiper_wrapper = document.querySelector(".KRmovie_swiper_wrapper");
  movieSwiper(swiper_wrapper, KRmovies);
  modal();
};
const getDrama = async () => {
  const api = await fetch(
    `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => drama.push(movie));
  console.log(drama);
  const swiper_wrapper = document.querySelector(".drama_swiper_wrapper");
  movieSwiper(swiper_wrapper, drama);
};

const getKDrama = async () => {
  const api = await fetch(
    `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => Kdrama.push(movie));
  console.log(drama);
  const swiper_wrapper = document.querySelector(".KRdrama_swiper_wrapper");
  movieSwiper(swiper_wrapper, Kdrama);
};

getMovies();
getKRmovies();
getDrama();
getKDrama();
