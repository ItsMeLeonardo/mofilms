import { ReactElement } from "react";

export interface MovieCardProps {
  id: string | number;
  title: string;
  rate: number;
  badge?: ReactElement | string;
  poster: string;
  date: string;
  backdrop: string;
  cols?: number;
  h?: number;
  //FIXME: delete the className
  className?: string;
}

export const defaultProps = {
  id: "",
  title: "",
  rate: 0,
  badge: null,
  poster: "",
  date: "",
  backdrop: "",
  cols: 3,
  h: 400,
  className: "",
};
