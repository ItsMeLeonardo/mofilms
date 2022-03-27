import { Text } from "@nextui-org/react";
import { TwoUsers } from "react-iconly";

interface Props {
  popularity: number;
}

export default function Badge({ popularity }: Props) {
  return (
    <>
      <TwoUsers stroke="bold" size="small" />
      <Text size={12} weight="bold">
        {popularity}
      </Text>
    </>
  );
}
