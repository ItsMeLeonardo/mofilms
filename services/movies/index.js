import { trending } from "./getTrending";
import { topMovies } from "./getTop";
import { popular } from "./getPopular";
import { details } from "./getDetails";
import { credits } from "./getCredits";
import { similar } from "./getSimilar";
import { search } from "./search";
import { video } from "./getVideos";

const movieService = {
  trending,
  topMovies,
  popular,
  details,
  credits,
  similar,
  search,
  video,
};

export default movieService;
