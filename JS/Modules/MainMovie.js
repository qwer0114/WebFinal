import { API_Key, API_URL, IMAGE_BASE_URL } from "./APIVar.js";
export const getMain = async (id, title, overview) => {
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
