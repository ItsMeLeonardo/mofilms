import { trending } from "./trending";
import { topMovies } from "./top";
import { similar } from "./similar";
import { search } from "./search";
import { video } from "./videos";
import { popular } from "./popular";
import { details } from "./details";
import { credits } from "./credits";

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
