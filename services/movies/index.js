import { trending } from "./getTrending";
import { topMovies } from "./getTop";
import { popular } from "./getPopular";
import { details } from "./getDetails";
import { credits } from "./getCredits";
import { similar } from "./getSimilar";

const movieService = {
  trending,
  topMovies,
  popular,
  details,
  credits,
  similar,
};

export default movieService;
