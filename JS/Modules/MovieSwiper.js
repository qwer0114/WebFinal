import { API_Key, API_URL, IMAGE_BASE_URL } from "./APIVar.js";
const movieSwiper = (swiper_wrapper, movies) => {
  movies.map((movie) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = movie.title ? movie.title : movie.name;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
    poster.setAttribute("class", "poster");
    swiper_slide.setAttribute("id", `${movie.id}`);
  });
};

export { movieSwiper };
