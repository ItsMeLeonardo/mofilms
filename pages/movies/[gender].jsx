import { useRouter } from "next/router";

import GenderList from "../../components/Genders";
import Discovers from "../../components/Discovers";

export default function Movies() {
  const router = useRouter();

  const { gender } = router.query;

  return (
    <>
      <h1>Movies</h1>
      <GenderList currentGender={gender} />
      <h2>{gender}</h2>
      <Discovers />
    </>
  );
}
