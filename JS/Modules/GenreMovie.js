import { API_Key, API_URL, IMAGE_BASE_URL } from "../Modules/APIVar.js";
import { modal, movieDetail } from "../Modules/Modal.js";

const moviesArray = [];
const genre_movies = document.querySelector(".genre_movies");
const genre_movie = document.querySelector(".genre_movie");
export const genreMovies = async (id, watchProvider) => {
  const movies = document.querySelector(".movies");
  const genre_title = document.querySelector(".genre_title");
  genre_movies.style.display = "block";
  movies.style.display = "none";

  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=${watchProvider}&language=ko-KR&with_genres=${id}`
  );
  const json = await api.json();
  json.results.map((movie) => moviesArray.push(movie));

  switch (id) {
    case 28:
      genre_title.innerHTML = "액션 영화";
      break;
    case 16:
      genre_title.innerHTML = "애니메이션 영화";
      break;
    case 35:
      genre_title.innerHTML = "코미디 영화";
      break;
    case 14:
      genre_title.innerHTML = "판타지 영화";
      break;
    case 27:
      genre_title.innerHTML = "공포 영화";
      break;
    case 80:
      genre_title.innerHTML = "범죄 영화";
      break;
  }

  moviesArray.map((movie) => {
    let slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    slide.appendChild(poster); // slide 안에 포스터 삽입
    slide.appendChild(title); // sldie 안에 제목 삽입
    genre_movie.appendChild(slide); // slide Wrapper에 slide 삽입

    title.innerHTML = movie.title ? movie.title : movie.name;

    poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
    poster.setAttribute("class", "poster");
    slide.setAttribute("class", "slide");
    slide.setAttribute("id", `${movie.id}`);
  });
  modal();
};
