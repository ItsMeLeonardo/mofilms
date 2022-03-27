import HorizontalList from "../HorizontalList";
import GenderAnchor from "./GenderAnchor";

export default function Genders({ currentGender, genders }) {
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
