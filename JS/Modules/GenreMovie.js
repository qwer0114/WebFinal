import { API_Key, API_URL, IMAGE_BASE_URL } from "../Modules/APIVar.js";
const moviesArray = [];
const genre_movies = document.querySelector(".genre_movies");
export const genreMovies = async (id) => {
    const movies = document.querySelector(".movies");
    movies.style.display = "none";

    const api = await fetch(
        `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=8&language=ko-KR&with_genres=${id}`
    );
    const json = await api.json();
    json.results.map((movie) => moviesArray.push(movie));

    moviesArray.map((movie) => {
        let swiper_slide = document.createElement("div"); // slide 한개
        let poster = document.createElement("img"); // 영화 포스터
        let title = document.createElement("div"); // 영화 제목
        swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
        swiper_slide.appendChild(title); // sldie 안에 제목 삽입
        genre_movies.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

        title.innerHTML = movie.title ? movie.title : movie.name;

        poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
        poster.setAttribute("class", "poster");
        swiper_slide.setAttribute("id", `${movie.id}`);
    });

}