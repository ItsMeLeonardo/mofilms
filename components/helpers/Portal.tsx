import { ReactChildren } from "react";
import { createPortal } from "react-dom";

//types
interface Props {
  children: ReactChildren;
}

export default function Portal({ children }: Props) {
  return createPortal(children, document.querySelector("#portal"));
}
