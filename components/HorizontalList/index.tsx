import { ReactNode } from "react";
import dynamic from "next/dynamic";

//components
const loader = () => <div>loading...</div>;
const HorizontalListMouse = dynamic(() => import("./HorizontalListMouse"), {
  loading: loader,
});
const HorizontalListTouch = dynamic(() => import("./HorizontalListTouch"), {
  loading: loader,
});

//utils
import { useTouch } from "hooks/useTouch";

//types
interface Props {
  children: ReactNode;
  gap?: number;
}

export default function HorizontalList(
  { children, gap = 2 }: Props = { children: null }
) {
  const isTouch = useTouch();

  return (
    <>
      {isTouch ? (
        <HorizontalListTouch gap={gap}>{children}</HorizontalListTouch>
      ) : (
        <HorizontalListMouse>{children}</HorizontalListMouse>
      )}
      <style jsx>{``}</style>
    </>
  );
}
