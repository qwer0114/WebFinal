import { modal, movieDetail } from "../Modules/Modal.js";
import { API_Key, API_URL, IMAGE_BASE_URL } from "../Modules/APIVar.js";
import { getMain } from "../Modules/MainMovie.js";
import { movieSwiper } from "../Modules/MovieSwiper.js";

const movies = [];
const topRate = [];
const upComing = [];
const movieDetails = [];
const image = [];
let index = Math.floor(Math.random() * 20);

const getMovies = async () => {
  const api = await fetch(
    `${API_URL}trending/movie/week?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => movies.push(movie));
  getMain(movies[index].id, movies[index].title, movies[index].overview);
  const swiper_wrapper = document.querySelector(".movie_swiper_wrapper");
  movieSwiper(swiper_wrapper, movies);
  modal();
};

const getTopRate = async () => {
  const api = await fetch(
    `${API_URL}movie/top_rated?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => topRate.push(movie));
  console.log(movies);
  const swiper_wrapper = document.querySelector(".topRate_swiper_wrapper");
  movieSwiper(swiper_wrapper, topRate);
  modal();
};

const getUpComing = async () => {
  const api = await fetch(
    `${API_URL}movie/upcoming?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => upComing.push(movie));
  console.log(movies);
  const swiper_wrapper = document.querySelector(".upComing_swiper_wrapper");
  movieSwiper(swiper_wrapper, upComing);
  modal();
};

getMovies();
getTopRate();
getUpComing();
