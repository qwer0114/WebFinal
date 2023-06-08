import { API_Key, API_URL, IMAGE_BASE_URL } from "./APIVar.js";
const modal = () => {
  const sliders = document.querySelectorAll(".swiper-slide");
  for (const slider of sliders) {
    slider.addEventListener("click", () => {
      movieDetail(slider.id);
    });
  }
};

const movieDetail = async (id) => {
  const modal_background = document.querySelector(".modal_background");
  const modal = document.querySelector(".modal_movie");
  const poster = document.querySelector(".detail_poster");
  const title = document.querySelector(".content_title");
  const tagline = document.querySelector(".tagline");
  const overview = document.querySelector(".detail_overview");
  const modal_exit = document.querySelector(".modal_exit");
  modal_background.style.display = "block";
  const api = await fetch(
    `${API_URL}/movie/${id}?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  console.log(json);
  modal.style.backgroundImage = `url(
      https://image.tmdb.org/t/p/original/${json.backdrop_path}
    )`;
  poster.setAttribute("src", `${IMAGE_BASE_URL}${json.poster_path}`);
  title.innerHTML = `${json.title}`;
  tagline.innerHTML = `${json.tagline}`;
  overview.innerHTML = `${json.overview}`;

  modal_exit.addEventListener("click", () => {
    modal_background.style.display = "none";
  });
};

export { modal, movieDetail };
