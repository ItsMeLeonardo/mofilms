//components
import HorizontalList from "components/HorizontalList";
import GenderAnchor from "./GenderAnchor";

//types
interface Props {
  currentGender: string;
  genders: Genders[];
}
interface Genders {
  id: number | string;
  name: string;
}

export default function Genders({ currentGender, genders }: Props) {
  return (
    <HorizontalList gap={2}>
      {genders.map(({ id, name }) => {
        const genderActive = id.toString() === currentGender;
        return (
          <GenderAnchor
            key={id}
            route={id.toString()}
            isInThisRoute={genderActive}
            label={name}
          />
        );
      })}
    </HorizontalList>
  );
}
