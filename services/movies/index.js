import { trending } from "./getTrending";
import { topMovies } from "./getTop";
import { popular } from "./getPopular";

const movieService = { trending, topMovies, popular };

export default movieService;
