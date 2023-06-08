const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
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
  console.log(movies);
  getMain(movies[index].id, movies[index].title, movies[index].overview);
  const swiper_wrapper = document.querySelector(".movie_swiper_wrapper");
  movies.map((movie) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = movie.title;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
    poster.setAttribute("class", "poster");
    swiper_slide.setAttribute("id", `${movie.id}`);
  });
  modal();
};
const getMain = async (id, title, overview) => {
  console.log(id);
  if (id === undefined) {
    return;
  } else {
    const image = await fetch(
      `${API_URL}movie/${id}/images?api_key=${API_Key}`
    );
    const json = await image.json();
    console.log(json);
    const main_movie = document.querySelector(".main_movie");
    const logo = document.querySelector(".logo");
    const title_content = document.querySelector(".title");
    const overview_content = document.querySelector(".overview");

    const filterLogo = json.logos.filter((logo) => logo.iso_639_1 !== "zh");
    console.log(filterLogo);
    main_movie.style.backgroundImage = `url(
      https://image.tmdb.org/t/p/original/${json.backdrops[0].file_path}
    )`;

    logo.style.backgroundImage = `url(
      https://image.tmdb.org/t/p/original/${filterLogo[0].file_path}
    )`;

    overview_content.innerHTML = `${overview}`;
    title_content.innerHTML = `${title}`;
  }
};

const getTopRate = async () => {
  const api = await fetch(
    `${API_URL}movie/top_rated?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => topRate.push(movie));
  console.log(movies);
  const swiper_wrapper = document.querySelector(".topRate_swiper_wrapper");
  topRate.map((movie) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = movie.title;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
    poster.setAttribute("class", "poster");
  });
};

const getUpComing = async () => {
  const api = await fetch(
    `${API_URL}movie/upcoming?api_key=${API_Key}&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => upComing.push(movie));
  console.log(movies);
  const swiper_wrapper = document.querySelector(".upComing_swiper_wrapper");
  upComing.map((movie) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = movie.title;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${movie.poster_path}`);
    poster.setAttribute("class", "poster");
  });
};

const modal = () => {
  const sliders = document.querySelectorAll(".swiper-slide");
  for (const slider of sliders) {
    slider.addEventListener("click", () => {
      movieDetail(slider.id);
    });
  }
};

const movieDetail = async (id) => {
  const modal = document.querySelector(".modal_movie");
  const poster = document.querySelector(".detail_poster");
  const title = document.querySelector(".content_title");
  const tagline = document.querySelector(".tagline");
  const overview = document.querySelector(".detail_overview");
  modal.style.display = "block";
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
};

getMovies();
getTopRate();
getUpComing();
