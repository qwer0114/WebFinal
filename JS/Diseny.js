const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
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
  });
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

const getKRmovies = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_origin_country=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => KRmovies.push(movie));
  console.log(KRmovies);
  const swiper_wrapper = document.querySelector(".KRmovie_swiper_wrapper");
  KRmovies.map((movie) => {
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
const getDrama = async () => {
  const api = await fetch(
    `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => drama.push(movie));
  console.log(drama);
  const swiper_wrapper = document.querySelector(".drama_swiper_wrapper");
  drama.map((drama) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = drama.name;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${drama.poster_path}`);
    poster.setAttribute("class", "poster");
  });
};

const getKDrama = async () => {
  const api = await fetch(
    `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => Kdrama.push(movie));
  console.log(drama);
  const swiper_wrapper = document.querySelector(".KRdrama_swiper_wrapper");
  Kdrama.map((drama) => {
    let swiper_slide = document.createElement("div"); // slide 한개
    let poster = document.createElement("img"); // 영화 포스터
    let title = document.createElement("div"); // 영화 제목
    swiper_slide.appendChild(poster); // slide 안에 포스터 삽입
    swiper_slide.appendChild(title); // sldie 안에 제목 삽입
    swiper_wrapper.appendChild(swiper_slide); // slide Wrapper에 slide 삽입

    title.innerHTML = drama.name;
    swiper_slide.setAttribute("class", "swiper-slide");
    poster.setAttribute("src", `${IMAGE_BASE_URL}${drama.poster_path}`);
    poster.setAttribute("class", "poster");
  });
};

getMovies();
getKRmovies();
getDrama();
getKDrama();
