import { useRouter } from "next/router";
import { Text, Spacer, Row } from "@nextui-org/react";

import GenderList from "../../components/Genders";
import MovieList from "../../components/MovieList";

const genders = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];

const data = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    poster:
      "https://64.media.tumblr.com/9c26a4dcfea433c46a36a2ae57f34e29/1d81862d4bac390e-5b/s500x750/6b8853732877309a1176d207c18112fcdb0f4b91.jpg",
    rate: 9.3,
    date: "1994-10-14",
    backdropImg:
      "https://images.unsplash.com/photo-1590666027616-38e0283eb6c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmVvbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    poster:
      "https://64.media.tumblr.com/b758278adda46dfd5b9946b4d4a96e9b/a6b000c88aa082e3-14/s1280x1920/9fc33042e985d211ac79eeaea2f3d135b264c4c9.jpg",
    rate: 9.0,
    date: "1974-12-20",
  },
  {
    title: "The Godfather",
    year: 1972,
    poster:
      "https://64.media.tumblr.com/a42cae9d62d982dbb65412201bdf0665/1d81862d4bac390e-48/s1280x1920/6a994756bb2fa131796ba504f63bc80cbc64f9b5.jpg",
    rate: 9.2,
    date: "1972-03-14",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    poster:
      "https://64.media.tumblr.com/c6f7a91dfd9258cc09f9fbc878c3999d/a6b000c88aa082e3-eb/s1280x1920/c0b2301c43c173226bb03b3fedcb0938241371c9.jpg",
    rate: 8.9,
    date: "2008-07-18",
  },
  {
    title: "The Shawshandsdsk Redemption",
    year: 1994,
    poster:
      "https://64.media.tumblr.com/9c26a4dcfea433c46a36a2ae57f34e29/1d81862d4bac390e-5b/s500x750/6b8853732877309a1176d207c18112fcdb0f4b91.jpg",
    rate: 9.3,
    date: "1994-10-14",
  },
  {
    title: "The Dark Knight 2",
    year: 2008,
    poster:
      "https://64.media.tumblr.com/c6f7a91dfd9258cc09f9fbc878c3999d/a6b000c88aa082e3-eb/s1280x1920/c0b2301c43c173226bb03b3fedcb0938241371c9.jpg",
    rate: 8.9,
    date: "2008-07-18",
  },
];

export default function Tv() {
  const router = useRouter();

  const { gender } = router.query;

  const getGenderName = (id) => {
    return genders.find((g) => g.id == id)?.name;
  };
  return (
    <>
      <Text h1>Tv list</Text>
      {/* add 5 movie same netflix header */}
      <GenderList genders={genders} currentGender={gender} />
      <Spacer x={2} />
      <Row as="h2" gap={1}>
        Results to
        <Text
          h3
          size="$fontSizesLg"
          weight="bold"
          css={{ textGradient: "$gradPurple" }}
        >
          {getGenderName(gender)}
        </Text>
      </Row>
      <MovieList movies={data} />
    </>
  );
}
