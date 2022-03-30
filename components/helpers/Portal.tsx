import { ReactNode } from "react";
import { createPortal } from "react-dom";

//types
interface Props {
  children: ReactNode;
}

export default function Portal({ children }: Props) {
  return createPortal(children, document.querySelector("#portal"));
}
